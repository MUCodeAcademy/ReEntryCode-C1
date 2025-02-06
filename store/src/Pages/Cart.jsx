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

import { useCart } from "../Context/CartContext";

function Cart() {

    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();

    return (
        <div>
            <h1>Cart</h1>
            <div id="cart-container">
                {cart.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <h2>{item.name}</h2>
                        <h4>{item.price}</h4>
                        <p>{item.description}</p>
                        <img src={item.img} />
                        <button onClick={() => { 
                            cart.find(element => element.name === item.name).quantity <= 1 ? removeFromCart(item) : decreaseQuantity(item)
                        }}>-</button>
                        <p>Quantity: {cart.find(element => element.name === item.name).quantity}</p>
                        <button onClick={() => increaseQuantity(item)}>+</button>
                        <button onClick={() => removeFromCart(item)} style={{ backgroundColor: 'red' }}>Delete</button>
                    </div>
                ))}
                {/* Checkout button that sends a confirmation message */}
            </div>
        </div>
    )
}

export default Cart;