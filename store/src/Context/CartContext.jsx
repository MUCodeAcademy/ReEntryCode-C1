import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        setCart((prev) => [...prev, product]);
    }

    function removeFromCart(product) {
        // If the item is already in the cart...
        if (cart.some((item) => item.name === product.name)) {
            // Find the item and reduce its quantity
            const item = cart.find((element) => element.name === product.name);
            item.quantity--;
            // If its quantity is 0, remove it from the cart
            if (item.quantity === 0) {
                setCart((prev) => (
                    prev.filter((item) => product.name != item.name)
                ));
            }
        }
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}