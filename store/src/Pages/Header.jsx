import { useState, useRef, useEffect } from 'react';
import '../CSS/Header.css';
import { useCart } from '../Context/CartContext';
import { NavLink, useNavigate } from 'react-router-dom';
import productList from '../assets/products.json';
import { useUser } from '../Context/UserContext';
import { useTheme } from '../Context/ThemeContext';

function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { currentUser, setUser, clearUser, currentPassword, setPasswordContext, clearPassword } = useUser();
    const { theme, toggleTheme } = useTheme();

    // Password and username states (and potentially a passwordFocus state)
    // When they type in the inputs it saves it into its respective state
    // Display the password requirements at some point
    // Check if their password meets the requirements as they update their password
    // Don't let them sign up or login if they haven't met those requirements

    // Check their password whenever password state changes
    useEffect(() => {
        // let validUpperCase;
        // let validLowerCase;
        // let validLength;
        // // Check if any of the characters in password has an uppercase letter
        // if (!password || !password.match(/[A-Z]/g)) {
        //     // Notify them it doesn't have an uppercase letter
        //     validUpperCase = false;
        // } else {
        //     validUpperCase = true;
        // }
        // // Check if any of the characters are lowercase
        // if (!password || !password.match(/[a-z]/g)) {
        //     validLowerCase = false;
        // } else {
        //     validLowerCase = true;
        // }
        // // Check the length of the password
        // if (!password || password.length <= 8) {
        //     validLength = false;
        // } else {
        //     validLength = true;
        // }
        // if (validUpperCase && validLowerCase && validLength) {
        //     setValidPassword(true);
        // } else {
        //     setValidPassword(false);
        // }

        const validUpperCase = password?.match(/[A-Z]/g);
        const validLowerCase = password?.match(/[a-z]/g);
        const validNumber = password?.match(/[0-9]/g);
        const validSpecial = password?.match(/[\p{P}\p{S}]/u); // matches all special characters
        const validLength = password?.length >= 8;

        setValidPassword(password && validUpperCase && validLowerCase && validLength && validNumber && validSpecial);
    }, [password, currentUser]);

    const { cart } = useCart();
    const searchRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        setSearchResults(
            productList.products.filter(element => element.name.toUpperCase().startsWith(searchTerm.toUpperCase()))
        );
    }, [searchTerm]);

    return (
        <div className='topnav'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
            {/* <NavLink to='/products' state={{ category: 'shirt', name: 'Orange Shirt' }}>Shirts</NavLink> */}
            {/* When they start typing in the search bar, it displays a dropdown of all the items with that search term */}
            {/* If they press enter, or click on one of the options, it goes to a products page with those products  */}
            <div className='search-container'>
                <form>
                    <input
                        type='text'
                        placeholder='    '
                        name='search'
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        ref={searchRef}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setTimeout(() => setIsFocused(false), 75)}
                        autoComplete='one-time-code'
                        onKeyUp={(e) => e.key === "Enter" ? (e.target.blur(), setSearchTerm("")) :  ""}
                        onKeyDown={(e) => e.key === "Enter" ? navigate(`/products/${searchTerm}`) : ""}
                        id={`${searchTerm ? '' : 'search-input'}`}
                    />
                    <button className='search-button' onClick={(e) => { navigate(`/products/${searchTerm}`); e.preventDefault(); setSearchTerm("") }}><i><img className='search-icon' src='/searchIcon.png' /></i></button>
                </form>
                {/* Only display these if they have a searchTerm and the input element is focused */}
                {(searchTerm && isFocused) &&
                    <ul className={`search-results ${searchResults.length + productList.products
                            .filter(element => element.name.toLowerCase().includes(searchTerm.toLowerCase()))
                            .filter(element => !searchResults.includes(element)).length 
                            > 3 ? 'scroll' : ""}`}>
                    {/* Filter the productList to only items that include their search term */}
                    {/* When they click on one of the items it should go to a products page with those items */}
                        {searchResults.map((item, index) => (
                            <li className={'navs'} key={index} onClick={() => setSearchTerm("")}>
                                <NavLink to={`/products/${item.name}`}>
                                {/* [b, l, u, e, s, h, i, r, t] */}
                                    {item.name.split('').map((char, i) => (
                                        <span
                                            key={i}
                                            className={searchTerm.toLowerCase().includes(char.toLowerCase()) ? 'highlight' : ''}
                                        >
                                        {char === ' ' ? '\u00A0' : char}
                                        </span>
                                    ))}
                                </NavLink>
                            </li>
                        ))}
                        {productList.products
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
                            .map((item, index) => (
                                <li className={'navs'} key={index} onClick={() => setSearchTerm("")}>
                                    <NavLink to={`/products/${item.name}`}>
                                        {item.name.split('').map((char, i) => (
                                            <span
                                                key={i}
                                                className={searchTerm.toLowerCase().includes(char.toLowerCase()) ? 'highlight' : ''}
                                            >
                                            {char === ' ' ? '\u00A0' : char}
                                            </span>
                                        ))}
                                    </NavLink>
                                </li>
                            ))
                        }
                        {(searchResults.length == 0 && productList.products
                            .filter(element => element.name.toLowerCase().includes(searchTerm.toLowerCase()))
                            .filter(element => !searchResults.includes(element)).length == 0)
                            &&
                            <li className='navs'>No results found.</li>
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
            <span className='theme-icon' onClick={toggleTheme}></span>
            {/* Ternary operator */}
            {currentUser ? (
                <div className='dropdown'>
                    <button className='dropbtn'>{currentUser} &#9660;</button>
                    <div className='dropdown-content'>
                        <button onClick={() => clearUser()}>Logout</button>
                    </div>
                </div>
            ) : (
            <div className='dropdown'>
                <button className='dropbtn'>Login &#9660;</button>
                <div className='dropdown-content'>
                    <input 
                        className='username-input'
                        type='text'
                        placeholder='Username'
                        name='username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type={`${showPassword ? 'text' : 'password'}`}
                        placeholder='Password'
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <ul className='password-requirements'>
                        <li>Password must be at least 8 characters.</li>
                        <li>Password must include at least one uppercase character.</li>
                        <li>Password must include at least one lowercase character.</li>
                        <li>Password must include at least one number.</li>
                        <li>Password must include at least one special character.</li>
                    </ul>
                    <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide Password' : 'Show Password'}</button>
                    <button disabled={validPassword ? false : true} onClick={() => { setUser(username); setPasswordContext(password); setPassword("")}}>Login</button>
                    <button disabled={validPassword ? false : true} onClick={() => { setUser(username); setPasswordContext(password); setPassword("")}}>Register</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default Header;