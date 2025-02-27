# Code Review

Look at each block of code and explain what it's doing in as much detail as you can.

```jsx
useEffect(() => {
    setSearchResults(
        productList.products.filter(element => element.name.toUpperCase().startsWith(searchTerm.toUpperCase()))
    );
}, [searchTerm]);
```

- 

```jsx
cart.reduce((acc, item2) => acc + item2.quantity, 0)
```

- 

```jsx
<button onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide Password' : 'Show Password'}</button>
```

- 

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

- 

```jsx
<Router>
    <Routes>
        <Route path='/' element={<><Home /><App /></>} />
        <Route path='/products/:item?' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
</Router>
```

- 

```jsx
{Array.from({ length: pageCount}, (_, index) => (
    <a className={currentPage == index + 1 ? 'active' : ''} key={index} onClick={() => setCurrentPage(index + 1)} {index + 1}</a>
))}
```

- 

```jsx
{currentUser ? (
    <h2>You are logged in as {currentUser}</h2>
    ) : (
    <h2>You are not logged in</h2>
)}
```

- 

```jsx
const [cart, setCart] = useState([]);

function addToCart(product) {
    setCart(prev =>
        prev.some(item => item.name === product.name) ? prev : [...prev, { ...product, quantity: 1 }]
    );
}
```

- 

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

- 

```jsx
cart.forEach((item) => {
    tempTotal += (item.price * item.quantity);
});
```

- 