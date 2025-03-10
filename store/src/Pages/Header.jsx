import { useState, useRef, useEffect } from 'react';
import '../CSS/Header.css';
import { useCart } from '../Context/CartContext';
import { NavLink, useNavigate } from 'react-router-dom';
import productList from '../assets/products.json';
import { useUser } from '../Context/UserContext';
import { useTheme } from '../Context/ThemeContext';

function Header() {
    const ads = [1, 2, 3, 4, 5];
    const [isFocused, setIsFocused] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [rotation, setRotation] = useState(45);
    const [validUsername, setValidUsername] = useState(null);

    const { currentUser, setUser, clearUser, currentPassword, setPasswordContext, clearPassword } = useUser();
    const { theme, toggleTheme } = useTheme();

    function register() {
        // Makes a request to our server's port, specifically to the 'login' endpoint
        fetch('http://localhost:3000/register', {
            method: 'POST', // Specifying that we're making a POST request (sending data)
             // Headers is for metadata (extra information) about the request to help the browser/server understand how to handle it
            headers: {
                'Content-Type': 'application/json', // Telling the server that the data we're sending is a JSON
            },
            // The body is the main content that we want to send
            body: JSON.stringify({ username: username, password: password }) // We want to send their username and password as a JSON string to our server
        })
        // Once the request completes, these .then statements will run
        .then(response => response.json()) // Takes our response from the server and parses it as a JSON
        .then(data => console.log(data)) // Once it's parsed as a JSON, we just log it to the console
        .catch(error => console.error(error)); // If there was an error, log that to the console
    }

    function checkUsername() {
        fetch('http://localhost:3000/check-username', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username })
        })
        .then(response => response.json())
        .then(data => setValidUsername(data))
        .catch(error => console.error(error));
    }
    
    function login() {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username, password: password })
        })
        .then(response => response.json())
        .then(data => {
            if (data === 'Login successful') {
                console.log(data);
                setUser(username);
            } else {
                alert(data);
            }
        })
        .catch(error => console.error(error));
    }
    
    
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

    
    // 1. States for the ads that it picks
    // 2. Run this function when the page loads to get an ad and put it in the first state
    // 3. Run this function again and see if the ad that it picked is already in the first state
    // 4. If it is, run it again, otherwise put that ad in the second state
    function getRandomAd() {
        const random = Math.floor(Math.random() * ads.length);
        const ad = ads[random]; // this will get the number from the ads array

        // if the ad it received is in the first state, run this function again.
        // Otherwise, return ad
        // if (firstAd) {
        //     if (firstAd === ad) {
        //         getRandomAd();
        //     } else {
        //         return ad; // When this function finishes, it will give you the ad that it chose
        //     }
        // }

        // firstAd === ad ? getRandomAd() : ad;

        return ad;
    }

    function getRandomAdDifferent() {
        const random = Math.floor(Math.random() * ads.length);
        const ad = ads[random]; // this will get the number from the ads array

        if (ad === firstAd) {
            getRandomAdDifferent();
        } else {
            return ad;
        }
    }

    [[1, 2, 3,], [4, 5, 6]]

    function handleClick() {
        searchRef.current.style.color = 'blue';
    }

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
            <span
                className='theme-icon'
                onClick={() => {
                    toggleTheme();
                    setRotation(prev => prev + 180);
                }}
                style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: 'transform .5s'
                }}
            ></span>
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
                        onBlur={checkUsername}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type={`${showPassword ? 'text' : 'password'}`}
                        placeholder='Password'
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <ul className='password-requirements'>
                        {validUsername && 
                            <>
                                {/* <li className={`${validUsername === 'Username available' ? 'green' : 'red'}`}>{validUsername}</li> */}
                                <li style={validUsername === 'Username available' ? {color: 'green'} : {color: 'red'}}>{validUsername}</li>
                            </>
                        }
                        <li>Password must be at least 8 characters.</li>
                        <li>Password must include at least one uppercase character.</li>
                        <li>Password must include at least one lowercase character.</li>
                        <li>Password must include at least one number.</li>
                        <li>Password must include at least one special character.</li>
                    </ul>
                    <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide Password' : 'Show Password'}</button>
                    <button disabled={validPassword ? false : true} onClick={() => { login(); setPassword("")}}>Login</button>
                    <button disabled={validPassword ? false : true} onClick={() => { setUser(username); register()}}>Register</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default Header;