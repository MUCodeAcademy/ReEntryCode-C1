import { useEffect, useState, useRef } from 'react';
import productList from '../assets/products.json';
import '../CSS/Products.css'
import Modal from './Modal';
import { useCart } from '../Context/CartContext';

function Products() {
    const [products, setProducts] = useState(productList.products);
    const [modalOpen, setModalOpen] = useState(false);
    const [productIndex, setProductIndex] = useState();
    const { cart, increaseQuantity, decreaseQuantity, addToCart, removeFromCart } = useCart();
    const gridRef = useRef(null);
    const animationFrameRef = useRef(null);

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
            <h1>Products</h1>
            {modalOpen &&
                <Modal 
                    product={products[productIndex]}
                    onClose={() => setModalOpen(false)}
                />
            }
            <div id='grid-container' ref={gridRef}>
                {products.map((item, index) => (
                    <div className='product' key={index}>
                        <div className='product-content'>
                            <div className='product-info' onClick={() => {
                                setModalOpen(true)
                                setProductIndex(index);
                            }}>
                                <h2>{item.name}</h2>
                                <h4>{item.price}</h4>
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
                                    <button onClick={() => increaseQuantity(item)}>+</button>
                                    <button onClick={() => removeFromCart(item)} style={{ backgroundColor: 'red' }}>Delete</button>
                                </>
                            )
                            :
                            (
                                <button onClick={() => addToCart(item)}>Add to Cart</button>
                            )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products;