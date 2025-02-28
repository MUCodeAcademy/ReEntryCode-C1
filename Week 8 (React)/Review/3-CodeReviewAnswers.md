# Code Review

Look at each block of code and explain what it's doing in as much detail as you can.

```jsx
useEffect(() => {
    setSearchResults(
        productList.products.filter(element => element.name.toUpperCase().startsWith(searchTerm.toUpperCase()))
    );
}, [searchTerm]);
```

- The useEffect runs this code whenever searchTerm changes
- setSearchResults updates the searchResults state
- Filtering our products.json based on if the name of the product starts with their searchTerm.

```jsx
cart.reduce((acc, item2) => acc + item2.quantity, 0)
```

- Combining the items in the cart.
- acc + item2.quantity => 0 + 3 = 3
- acc + item2.quantity => 3 + 5 = 8

```jsx
<button onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide Password' : 'Show Password'}</button>
```

- Whenever they click on the button, update showPassword to be the opposite of showPassword
- The ternary operator checks if showPassword is true; if it is, display 'Hide Password' else display 'Show Password'

```jsx
productList.products
    .filter(element => element.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(element => !searchResults.includes(element))
    .sort((a, b) => {
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
    })
```

- The first filter is doing basically the same as #1
- The second filter is filtering out elements that isn't in the searchResults
- Sort it in alphabetical order

```jsx
<Router>
    <Routes>
        <Route path='/' element={<><Home /><App /></>} />
        <Route path='/products/:item?' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
</Router>
```

- When the user goes to `localhost:5317` it will render the Home component and App component
- When they go to `/products/:item?` it will load the item into the URL.
- When they go to `/cart` render the Cart component

```jsx
{Array.from({ length: pageCount}, (_, index) => (
    <a className={currentPage == index + 1 ? 'active' : ''} key={index} onClick={() => setCurrentPage(index + 1)}>{index + 1}</a>
))}
```

- Array.from will create a new array with a length of whatever pageCount is.
- Assigning a class to the 'a' tag; gives it the active class if the currentPage is the same as the index + 1. Otherwise give it no class.
- We have to do + 1 because the index is zero-indexed (starts at 0).
- The key is for React to keep track of different items.

```jsx
{currentUser ? (
    <h2>You are logged in as {currentUser}</h2>
    ) : (
    <h2>You are not logged in</h2>
)}

{currentUser && (
    <h2>You are logged in as {currentUser}</h2>
)}
```

- Checks if there is a currentUser.
- If there is, display the first h2 with the currentUser.
- Else, display you are not logged in.

```jsx
const [cart, setCart] = useState([]);

function addToCart(product) {
    setCart(prev =>
        prev.some(item => item.name === product.name) ? [...prev, { ...product, quantity: quantity++ }] : prev
    );
}

<div onClick={() => addToCart(product)}</div>
```

- Updating our cart.
- prev is taking the most recent version of the state.
- .some is looping through each item in the cart and checking if any of the item.names equal the product.name.
- So it's checking to see if the product they clicked on is already in the cart.
- If it does find the item in the cart (true), it will 
- The ...prev copies each item in the cart and adds the new product
- Otherwise, if it's not in the cart, just return the cart

```jsx
function increaseQuantity(product) {
    setCart(prevCart =>
        prevCart.map(item => {
            if (item.name === product.name) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        })
    );
}
```

- If the item is in the cart, increase quantity by 1. Otherwise, just return the item (basically doing nothing)

```jsx
cart.forEach((item) => {
    tempTotal += (item.price * item.quantity);
});
```

- forEach will loop through an array (forEach item in the array...)
- Multiplies the item's price times its quantity and adds that to the tempTotal.