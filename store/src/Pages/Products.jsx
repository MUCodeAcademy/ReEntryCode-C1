import { useEffect, useState, useRef } from 'react';
import productList from '../assets/products.json';
import '../CSS/Products.css'
import Modal from './Modal';
import { useCart } from '../Context/CartContext';
import { useParams } from 'react-router-dom';
import { saveCart } from './Header';
import { useUser } from '../Context/UserContext';

function Products() {
    productList.products = productList.products.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
          return -1; // sort A before B
      }
      if (nameA > nameB) {
          return 1; // sort A after B
      }

      // if they're equal
      return 0;
    });

    const { item } = useParams();
    let initialItems;
    // if (no item) {
    //   initialItems will be productList  
    // } otherwise {
    //   initialItems will be filtered down to just the item
    // }
    if (!item) {
      initialItems = productList.products;
    } else {
      initialItems = productList.products.filter(element => element.name == item);
    }

    const [products, setProducts] = useState(initialItems);
    const [modalOpen, setModalOpen] = useState(false);
    const [productIndex, setProductIndex] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    // e.g
    // 1 * 12 = 12
    // 2 * 12 = 24
    const lastItem = currentPage * itemsPerPage;
    const firstItem = lastItem - itemsPerPage; // should always be 0th index
    const currentProducts = products.slice(firstItem, lastItem); // gets everything from the first item to the last item
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const { cart, increaseQuantity, decreaseQuantity, addToCart, removeFromCart } = useCart();
    const { currentUser } = useUser();

    const gridRef = useRef(null);
    const animationFrameRef = useRef(null);

    // Ensures that the cart state is updated, then saves the cart
    useEffect(() => {
      saveCart(currentUser, cart);
    }, [cart]);

    useEffect(() => {
      if (!item) {
        setProducts(productList.products);
      } else {
        setProducts(productList.products.filter(element => element.name.toLowerCase().includes(item.toLowerCase())))
      }
    }, [item]);

    useEffect(() => {
        const handleMouseMove = (e) => {
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
    
          animationFrameRef.current = requestAnimationFrame(() => {
            if (!gridRef.current) return;
    
            for (const card of gridRef.current.getElementsByClassName("product")) {
              const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
    
              card.style.setProperty("--mouse-x", `${x}px`);
              card.style.setProperty("--mouse-y", `${y}px`);
            }
          });
        };
    
        document.addEventListener("mousemove", handleMouseMove);
    
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
        };
      }, []);

    return (
        <>
          {item &&
            <p style>Search results for: {item}</p>
          }
          <h1>Products</h1>
          {modalOpen &&
            <Modal
                product={currentProducts[productIndex]}
                onClose={() => setModalOpen(false)}
            />
          } 
          <div id='grid-container' ref={gridRef}>
              {currentProducts.map((item, index) => (
                  <div className='product' key={index}>
                      <div className='product-content'>
                          <div className='product-info' onClick={() => {
                              setModalOpen(true)
                              setProductIndex(index);
                          }}>
                              <h2>{item.name}</h2>
                              <h4>${item.price}</h4>
                              <p>{item.description}</p>
                              <img src={item.img} />
                          </div>
                          <div className='cart-buttons'>
                          {cart.some(element => element.name === item.name) ? (
                              <>
                                  <button onClick={() => { 
                                      cart.find(element => element.name === item.name).quantity <= 1 ? removeFromCart(item) : decreaseQuantity(item);
                                  }}>-</button>
                                  <p>Quantity: {cart.find(element => element.name === item.name).quantity}</p>
                                  <button onClick={() => { increaseQuantity(item); }}>+</button>
                                  <button onClick={() => { removeFromCart(item); }} style={{ backgroundColor: 'red' }}>Delete</button>
                              </>
                          )
                          :
                          (
                              <button onClick={() => { addToCart(item); }}>Add to Cart</button>
                          )}
                          </div>
                      </div>
                  </div>
              ))}
            <div className='pagination'>
              <a className={currentPage == 1 ? 'disabled' : ''} onClick={() => setCurrentPage(currentPage - 1)}>&laquo;</a>
              {Array.from({ length: pageCount}, (_, index) => (
                <a className={currentPage == index + 1 ? 'active' : ''} key={index} onClick={() => setCurrentPage(index + 1)}>{index + 1}</a>
              ))}
              <a onClick={() => setCurrentPage(currentPage == pageCount ? 1 : currentPage + 1)}>&raquo;</a>
            </div>
          </div>
      </>
    )
}

export default Products;