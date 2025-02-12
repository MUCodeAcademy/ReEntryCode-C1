import { useState, useRef } from 'react';
import '../CSS/Header.css';
import { useCart } from '../Context/CartContext';
import { NavLink } from 'react-router-dom';
import productList from '../assets/products.json';

function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const { cart } = useCart();
    const searchRef = useRef(null);

    return (
        <div className='topnav'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/products' state={{ category: 'shirt', name: 'Orange Shirt' }}>Shirts</NavLink>
            {/* When they start typing in the search bar, it displays a dropdown of all the items with that search term */}
            {/* If they press enter, or click on one of the options, it goes to a products page with those products  */}
            <div className='search-container'>
                <form>
                    <input
                        type='text' 
                        placeholder='Search'
                        name='search'
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        ref={searchRef}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setTimeout(() => setIsFocused(false), 75)}
                    />
                    <button className='search-button'><i><img className='search-icon' src='/searchIcon.png' /></i></button>
                </form>
                {/* Only display these if they have a searchTerm and the input element is focused */}
                {(searchTerm && isFocused) &&
                    <ul className='search-results'>
                    {/* Filter the productList to only items that include their search term */}
                    {/* When they click on one of the items it should go to a products page with those items */}
                        {productList.products
                            .filter(element => element.name.toLowerCase().includes(searchTerm.toLowerCase()))
                            .map((item, index) => (
                                <li key={index}><NavLink to={`/products/${item.name}`}>{item.name}</NavLink></li> 
                            ))
                        }
                    </ul>
                }
            </div>
            <NavLink to='/cart' className='cart-holder'>
                <img className='cart-icon' src='/cartIcon.png' />
                <p>
                    {cart.reduce((acc, item2) => acc + item2.quantity, 0)}
                </p>
            </NavLink>
            <div className='dropdown'>
                <button className='dropbtn'>Login &#9660;</button>
                <div className='dropdown-content'>
                    <input 
                        className='username-input'
                        type='text' 
                        placeholder='Username' 
                        name='username'
                    />
                    <input 
                        type='password'
                        placeholder='Password'
                        name='password'
                    />
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Header;