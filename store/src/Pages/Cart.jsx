/*

- Display the cart items
    - Remove from cart button on each items
- Calculate tax/shipping/total based on their location
    - Going to need to store tax rates for different locations
    - Going to need to get their location from their profile or ask them directly
- Calculate time to ship based on their location(?) (time can just be made up)
- Checkout button
- Order confirmation message
    - Send them an email confirmation
- (optional)Recommend other products based on what's in your cart (frequently bought together items)

*/

import { useState, useEffect, useRef } from "react";
import { useCart } from "../Context/CartContext";
import taxRates from '../assets/taxRates.json';
import ModalCheckout from "./ModalCheckout";
import '../CSS/Products.css'

function Cart() {
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(taxRates.rates[0].NE);
    const [shippingCost, setShippingCost] = useState(7.99);
    const [total, setTotal] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();

    const gridRef = useRef(null);
    const animationFrameRef = useRef(null);

    /*
    each item                                                                                                               
    subtotal
    tax
    shippingCost
    total
    */

    useEffect(() => {
        let tempTotal = 0;
        cart.forEach((item) => {
            tempTotal += (item.price * item.quantity);
        });
        if (tempTotal != 0) {
            setSubtotal(tempTotal.toFixed(2));
            let totalTax = ((tempTotal + shippingCost) * tax);
            setTotal(((tempTotal + shippingCost) + totalTax).toFixed(2));
        } else {
            setSubtotal(0);
            setTotal(0);
        }
    }, [cart]);

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
            <h1>Cart</h1>
            {modalOpen &&
                <ModalCheckout onClose={() => setModalOpen(false)} subtotal={subtotal} total={total} shippingCost={shippingCost} tax={tax} />
            }
            <div id='grid-container' ref={gridRef}>
                {cart.map((item, index) => (
                    <div className='product' key={index}>
                        <div className='product-content'>
                            <div className='product-info'>
                                <h2>{item.name}</h2>
                                <h4>${item.price}</h4>
                                <p>{item.description}</p>
                                <img src={item.img} />
                            </div>
                            <div className='cart-buttons'>
                                <button onClick={() => { 
                                    cart.find(element => element.name === item.name).quantity <= 1 ? removeFromCart(item) : decreaseQuantity(item)
                                }}>-</button>
                                <p>Quantity: {cart.find(element => element.name === item.name).quantity}</p>
                                <button onClick={() => increaseQuantity(item)}>+</button>
                                <button onClick={() => removeFromCart(item)} style={{ backgroundColor: 'red' }}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <aside id="checkout-info">
            {/* subtotal for items in cart, tax amount, total with tax, shipping estimation depending on carrier */}
                <ul>
                    {/* e.g. Microphone x 3: $150 */}
                    {cart.map((item, index) => {
                        const quantity = cart.find(element => element.name === item.name).quantity;
                        return <li key={index}>{item.name} x {quantity}: ${(item.price * quantity).toFixed(2)}</li>
                    })}
                    <li>Subtotal: ${subtotal}</li>
                    <li>Shipping: ${shippingCost}</li>
                    <li>Tax Rate: ${tax}</li>
                    <li>Total: ${total}</li>
                </ul>
                <button onClick={() => setModalOpen(true)}>Checkout</button>
            </aside>        
        </>
    )
}

export default Cart;