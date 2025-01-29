# Cart

```js
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const newDiv = document.createElement("div");

const cartDiv = document.getElementById("cart");

cartDiv.append(newDiv);

// Clear cart button
const clearCartButton = document.createElement("button");
clearCartButton.textContent = "Clear Cart";
clearCartButton.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});

// Remove item function and button
function removeItem(e) {
    // e is the item that we want to remove
    // filter will keep items that don't have the same name as the name of the item we want to remove
    cart = cart.filter((item) => e.name != item.name);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

// Display the cart items
for (let i = 0; i < cart.length; i++) {
    // Make a new div
    const newDiv = document.createElement("div");

    // Might want to add a class to the newDiv for styling
    // OR add styling in here

    // Add the current product's information to that new div
    // (The current item in the loop is 'i')
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = cart[i].name;

    const priceHeading = document.createElement("h5");
    priceHeading.textContent = cart[i].price.toFixed(2);
    
    const descriptionText = document.createElement("p");
    descriptionText.textContent = cart[i].description;

    const quantity = document.createElement("p");
    quantity.textContent = `Quantity: ${cart[i].quantity}`;

    const image = document.createElement("img");
    image.src = cart[i].image;

    // Add an "remove from cart" button to the current product
    const removeFromCart = document.createElement("button");
    removeFromCart.addEventListener("click", () => removeItem(cart[i]));
    removeFromCart.innerHTML = `<img id="cartImage" style="width: 20px; height: auto" src="cartIcon.png"/> Remove`;
    
    // const cartImage = document.createElement("img");
    // cartImage.src = "cartIcon.png";
    // cartImage.style.width = "20px";
    // addToCart.append(cartImage);
    // addToCart.textContent = "Add to Cart";
    
    newDiv.append(nameHeading, priceHeading, descriptionText, quantity, image, removeFromCart);
    
    // Append that div to our products div
    cartDiv.append(newDiv);
    const cartImage = document.querySelector("#cartImage");
    cartImage.style.height = "20px";
}

let salesTax;
let subTotal = 0;

for (let i = 0; i < cart.length; i++) {
    // add the subTotals of each item
    // subTotal = cart[i].price + subTotal;
    subTotal += cart[i].price * cart[i].quantity; // shorthand (adding and assigning at the same time)
}

salesTax = subTotal * .075;

const total = salesTax + subTotal;

console.log(total);

// Display the subtotal / tax / total

const totalDiv = document.createElement("div");
totalDiv.classList.add("totalClass");

const subtotalDisplay = document.createElement("p");
// toFixed(2) restricts it to 2 decimal places
subtotalDisplay.textContent = `Subtotal: $${subTotal.toFixed(2)}`;

const taxDisplay = document.createElement("p");
taxDisplay.textContent = `Tax: $${salesTax.toFixed(2)}`;

const totalDisplay = document.createElement("p");
totalDisplay.textContent = `Total: $${total.toFixed(2)}`;

totalDiv.append(subtotalDisplay, taxDisplay, totalDisplay);

document.body.append(totalDiv, clearCartButton);

const productDiv = document.getElementById("products");
productDiv.append(totalDiv);
```