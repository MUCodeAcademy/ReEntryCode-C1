// Pseudocode

// Select our products div
const productDiv = document.querySelector("#products");

// Create a list of products (array of objects)
    // price, name, description, image, etc.
const products = [
    {
        name: "Blue Shirt",
        price: 10.99,
        description: "This thing is blue.",
        image: "blueShirt.png"
    },
    {
        name: "Yellow Shirt",
        price: 15.49,
        description: "Here is a description for the yellow shirt.",
        image: "yellowShirt.png"
    },
    {
        name: "Orange Shirt",
        price: 1499.99,
        description: "Prestigious orange shirt.",
        image: "orangeShirt.png"
    },
];

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
    addToCart.textContent = "Add to Cart";

    newDiv.append(nameHeading, priceHeading, descriptionText, image, addToCart);

    // Append that div to our products div
    productDiv.append(newDiv);
}

// () => "anonymous function"

// It's all the same as above, but we don't need to do products[i]
// since we're already in the products array
// products.forEach((i) => {
//     const nameHeading = document.createElement("h3");
//     nameHeading.textContent = i.name;
// });
