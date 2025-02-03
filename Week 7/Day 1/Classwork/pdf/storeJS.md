# Store
```js
// Select our products div
const productDiv = document.querySelector("#products");

// Create a list of products (array of objects)
    // price, name, description, image, etc.
const products = [
    {
        name: "Blue Shirt",
        price: 10.99,
        description: "This thing is blue.",
        image: "blueShirt.png",
        quantity: 1,
    },
    {
        name: "Yellow Shirt",
        price: 15.49,
        description: "Here is a description for the yellow shirt.",
        image: "yellowShirt.png",
        quantity: 1,
    },
    {
        name: "Orange Shirt",
        price: 1499.99,
        description: "Prestigious orange shirt.",
        image: "orangeShirt.png",
        quantity: 1,
    },
];

// JSON.parse will turn our cart string back into an array
const cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);

function addItem(e) {
    // Push the item (e) to the cart array
    // If the item is already in the cart, increase the quantity
    if (cart.some((item) => item.name === e.name)) {
        // Increase the quantity of the item in the cart
        const item = cart.find((element) => element.name == e.name);
        item.quantity++;
        console.log(item);
    } else {
        cart.push(e);
    }
    console.log(cart);
    // JSON.stringify will turn the cart into a string (localStorage only accepts strings)
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Loop through the array
for (let i = 0; i < products.length; i++) {
    // Make a new div
    const newDiv = document.createElement("div");

    // Might want to add a class to the newDiv for styling
    // OR add styling in here

    // Add the current product's information to that new div
    // (The current item in the loop is 'i')
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = products[i].name;

    const priceHeading = document.createElement("h5");
    priceHeading.textContent = products[i].price;
    
    const descriptionText = document.createElement("p");
    descriptionText.textContent = products[i].description;

    const image = document.createElement("img");
    image.src = products[i].image;

    // Add an "add to cart" button to the current product
    const addToCart = document.createElement("button");
    addToCart.addEventListener("click", () => addItem(products[i]));
    
    // const cartImage = document.createElement("img");
    // cartImage.src = "cartIcon.png";
    // cartImage.style.width = "20px";
    // addToCart.append(cartImage);
    // addToCart.textContent = "Add to Cart";
    addToCart.innerHTML = `<img id="cartImage" style="width: 20px; height: auto" src="cartIcon.png"/> Add to Cart`;
    
    newDiv.append(nameHeading, priceHeading, descriptionText, image, addToCart);
    
    // Append that div to our products div
    productDiv.append(newDiv);
    const cartImage = document.querySelector("#cartImage");
    cartImage.style.height = "20px";
}

// () => "anonymous function"

// It's all the same as above, but we don't need to do products[i]
// since we're already in the products array
// products.forEach((i) => {
//     const nameHeading = document.createElement("h3");
//     nameHeading.textContent = i.name;
// });
