import { useState, useEffect } from "react";

function ProductsPage() {
    const products = [
        {
            "name": "The Adventures of Tom Sawyer",
            "price": 10.99,
            "description": "Tom Sawyer goes on adventures."
        },
        {
            "name": "The Adventures of Huckleberry Finn",
            "price": 12.99,
            "description": "Huckleberry Finn goes on adventures. Tom Sawyer shows up somewhere."
        },
        {
            "name": "The Frontier",
            "price": 8.99,
            "description": "A book about Nebraska or something."
        },
    ];

    const [productList, setProductList] = useState(products);
    const [cart, setCart] = useState([]);

    function addToCart(index) {
        // Update the cart with the product they clicked on
        setCart(prevCart => [...prevCart, productList[index]]);
    }

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <div>
            <h1>Products</h1>
            {productList.map((item, index) => (
                 <div>
                    <h2>{item.name}</h2>
                    <h3>{item.description}</h3>
                    <h4>${item.price}</h4>
                    <button onClick={() => addToCart(index)}>Add to cart</button>
                 </div>
            ))}
        </div>
    )
}

export default ProductsPage;