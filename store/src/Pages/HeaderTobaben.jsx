import {useEffect, useState, useRef } from 'react';
import '../CSS/HeaderTobaben.css';
import { useCart } from '../Context/CartContext';
import { useUser } from "../Context/UserContext";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import productList from '../assets/products.json';


function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const { cart } = useCart();
    const searchRef = useRef(null);
    const navigate = useNavigate();
    const listRef = useRef(null);
    
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    const { currentUser, setUser, clearUser, setPasswordContext, clearPasswordContext } = useUser();

    // Password and username states (and potentially a passwordFocus state)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // When they type in those inputs it saves it into its respective state

    // Display the password requirements at some point

    // Check if their password meets the requirements whenever they update their password

    // Don't let them sign up / login if they haven't met those requirements

    // Check their password whenever password state changes
    
    useEffect(() => {
        // let validUpperCase;
        // let validLowerCase;
        // let validLength;

        // // Check if any of the characters in the password has an uppercase letter
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
        // if (!password || password.length <= 7) {
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
        const validSpecial = password?.match(/[\p{P}\p{S}]/u);
        const validLength = password?.length >= 7;

        setValidPassword(password && validUpperCase && validLowerCase && validNumber && validSpecial && validLength);
    }, [password]);

    const [isOpen, setIsOpen] = useState(false);

    // Can use a 'useEffect' by itself to independently run console.logs for testing.
    useEffect(() => {
        console.log(username, password);
        // console.log(password);
    }, [username, password]);

    useEffect(() => {
        setSearchResults(
            productList.products.filter(element => element.name.toUpperCase().startsWith(searchTerm.toUpperCase))
        );
    }, [searchTerm]);

  function openNav() {
    setIsOpen(true);
  }
  
  function closeNav() {
    setIsOpen(false);
  }

    return (
            <nav id='navbar5' className="topnav main-container">
                <ul>
                    <li className='nothing' style= {{ borderRadius: '20px 0px 0px 20px' }}>
                        <div id='mySidebar' className={`sidebar ${isOpen ? 'openSidebar container1' : 'closedSidebar'}`}>
                        <a href='javascript:void(0)' 
                            className='closebtn' id='closebtn'
                            onClick={() => closeNav()}><strong>X</strong></a>
                            <NavLink to='/products' id='sidelink1' state={{ category: 'Shirt' }} className={({ isActive }) => (isActive ? 'active' : '')}>Shirts</NavLink>
                            <NavLink to='/products' id='sidelink2' state={{ category: 'Pants' }} className={({ isActive }) => (isActive ? 'active' : '')}>Pants</NavLink>
                            <NavLink to='/products' id='sidelink3' state={{ category: 'Misc' }} className={({ isActive }) => (isActive ? 'active' : '')}>Misc Stuff</NavLink>
                            <NavLink to='/products' id='sidelink3' state={{ category: 'Criminal' }} className={({ isActive }) => (isActive ? 'active' : '')}>Criminal Type Stuff</NavLink>
                        </div>
                        {/* <div id='main' className={`${isOpen ? 'openMain' : 'closedMain'} test1`}>
                        </div> */}
                        <button className="openbtn" onClick={() => openNav()}>☰</button>
                    </li>

                    {/* <li className='container2'>
                        <div className="custom-select container2" style={{width: '175px',}}>
                            <select>
                                <option value="0">Select Product:</option>
                                <option value="1">Blue Shirt</option>
                                <option value="2">Orange Shirt Here!</option>
                                <option value="3">Yellow Shirt</option>
                                <option value="4">Black Pants</option>
                                <option value="5">Blue Pants</option>
                                <option value="6">Gray Pants</option>
                                <option value="7">BitCoin Mining Server</option>
                                <option value="8">Android Tablet</option>
                                <option value="9">Computer Mouse</option>
                                <option value="10">POS Honda</option>
                                <option value="11">Something</option>
                                <option value="12">Widget</option>
                            </select>
                        </div>
                    </li> */}

                    <li className='container3 firstitem'><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                    </li>  

                    <li className='container4'><NavLink to='/products' className={({ isActive }) => (isActive ? 'active' : '')}>Products</NavLink>
                        <ul>
                            <li><NavLink to='/products' state={{ category: 'Shirt' }} className={({ isActive }) => (isActive ? 'active' : '')}>Shirts</NavLink>
                                <ul>
                                    <li><NavLink to='/products' state={{ name: 'Orange Shirt', category: 'Shirt' }} className={({ isActive }) => (isActive ? 'active' : '')}>Orange Shirts Here!</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li><NavLink to='/products' state={{ category: 'Pants' }} className={({ isActive }) => (isActive ? 'active' : '')}>Pants</NavLink>
                                <ul>
                                    <li><a>Blue Jeans</a></li>
                                    <li><a>Black Pants</a></li>
                                    <li><a>Gray Pants</a></li>
                                </ul>
                            </li>
                            <li><NavLink to='/products' state={{ category: 'Misc' }} className={({ isActive }) => (isActive ? 'active' : '')}>Misc Stuff</NavLink>
                                <ul>
                                    <li><a>BitCoin Mining Server</a></li>
                                    <li><a>Computer Mouse</a></li>
                                </ul>
                            </li>
                            <li><NavLink to='/products' state={{ category: 'Criminal' }} className={({ isActive }) => (isActive ? 'active' : '')}>Criminal Type Stuff</NavLink>
                            </li>
                        </ul>
                    </li>


                <li className='container6'><a>Categories</a>
                    <ul>
                        <li><a>Placeholder0</a>
                            <ul>
                                <li><a>Placeholder2</a></li>
                                <li><a>Placeholder3</a></li>
                            </ul>
                        </li>
                        <li id="boilerRoom1"><a>WeirdPlaceholder</a>
                            <ul>
                                <li><a id="boilerRoom" title="Easter Egg">Hidden Something...</a></li>
                            </ul>
                        </li>
                        <li><a>Placeholder4</a></li>
                        <li><a>Placeholder5</a></li>
                    </ul>
                </li>

                <li className='container7'><a>Something</a></li>
                <li className='container8'><NavLink to='/aboutus' className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink></li>
                <li className='container5'><a>Contact</a>
                        <ul>
                            <li><a>Company Address</a></li>
                        </ul>
                    </li>

                <li className='search-container container9'>
                    <form>
                        <input
                            id={`${searchTerm ? '' : 'search-input'}`}
                            type='text'
                            placeholder='Search'
                            title='You can search here Daddy.'
                            name='search'
                            onChange={(e) => setSearchTerm(e.target.value)}
                            value={searchTerm}
                            ref={searchRef}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setTimeout(() => setIsFocused(false), 75)}
                            autoComplete='one-time-code'
                            onKeyUp={(e) => e.key === 'Enter' ? (e.target.blur(), setSearchTerm('')) : ''}
                            onKeyDown={(e) => e.key === "Enter" ? navigate(`/products/${searchTerm}`) : ''}
                            />
                        <button id='searchButton' onClick={(e) => { navigate(`/products/${searchTerm}`); e.preventDefault(); setSearchTerm('') }}><i>&#x1F50D;</i></button>
                    </form>
                    {(searchTerm ) &&
                        <ul ref={listRef} className={`search-results' ${listRef?.current?.children.length > 2 ? 'scroll' : ''}`}>
                            {searchResults.map((item, index) => (
                                <li className={`navs ${item.name.includes(searchTerm) ? 'highlight' : ''}`} key={index} onClick= {() => setSearchTerm('')}>
                                    {/* Change NavLink to DIV to disable linking automatically to the filtered product page. */}
                                    <NavLink to={`/products/${item.name}`}>
                                        {/* [b, l, u, e, s, h, i, r, t] */}
                                        {item.name.split('').map((char, i) => (
                                            <span
                                                key={i}
                                                className={searchTerm.toLowerCase().includes(char.toLowerCase()) ? 'highlight' : ''}    
                                            >
                                            {char}
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
                                        return -1; //sort A before B
                                    }
                                    if (nameA > nameB) {
                                        return 1; //sortA after B
                                    }
                                    
                                    //if they're equal
                                    return 0;
                                })
                                .map((item, index) => (
                                    <li className={`navs ${item.name.includes(searchTerm) ? 'highlight' : ''}`} key={index} onClick= {() => setSearchTerm('')}>
                                    {/* Change NavLink to DIV to disable linking automatically to the filtered product page. */}
                                    <NavLink to={`/products/${item.name}`}>
                                        {/* [b, l, u, e, s, h, i, r, t] */}
                                        {item.name.split('').map((char, i) => (
                                            <span
                                                key={i}
                                                className={searchTerm.toLowerCase().includes(char.toLowerCase()) ? 'highlight' : ''}
                                            >
                                            {char}
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
                </li>

                <li className='cart-holder container11'>
                    <NavLink to='./Cart'><img className='cart-icon' src='/cartIconWhite.png' /></NavLink>
                    <p id='cart-quantity'>{cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)}</p>
                </li>

                <li className='dropdown container10 lastitem'>
                    {/* If there's a current user, display that, otherwise they are not logged in */}
                    {currentUser ? (
                    <div style={{ padding: '0px', width: '160px', height: '64.25px'}}>
                    
                    <h5 >You are logged in as <br></br>{currentUser}</h5>
                    
                    <button
                        className='dropbtn-logout'
                        onClick={() => clearUser()}
                    >Logout</button>
                    </div>
                    )
                    :
                    (
                    <div>   
                        <h4 style={{ padding: '8px 0px'}}>You are not logged in</h4>
                    
                        <button className='dropbtn-login'>Login&#9660;</button>
                        <div className='dropdown-content'>
                            <input
                                type='text'
                                className='userName'
                                placeholder='Username'
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                name='username'
                                autoComplete='one-time-code'
                                />
                            <input
                                type={`${showPassword ? 'text' : 'password'}`}
                                className='password'
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                name='password'
                                // title='Password MUST be at least 8 characters & contain 1 uppercase, 1 lowercase, 1 special character & 1 number.'
                                title='
                                    &#8226; Password must be at least 8 characters.
                                    &#8226; Password must include one uppercase letter.
                                    &#8226; Password must include one lowercase letter.
                                    &#8226; Password must include one number.
                                    &#8226; Password must include one special character.
                                '
                                />
                            <ul className='password-requirements'>
                                    <li>&#8226; Password must be at least 8 characters.</li>
                                    <li>&#8226; Password must include one uppercase letter.</li>
                                    <li>&#8226; Password must include one lowercase letter.</li>
                                    <li>&#8226; Password must include one number.</li>
                                    <li>&#8226; Password must include one special character.</li>
                            </ul>
                            {/* setShowPassword(!showPassword) toggles the value of showPassword between true & false. */}
                            <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide Password' : 'Show Password'}</button>
                            <button>Forgot Password</button>
                            <button className='dropbtn1' disabled={validPassword ? false : true}  onClick={() => { setUser(username); setPasswordContext(password), setPassword('')}}>Login</button>
                            <button className='dropbtn1' disabled={validPassword ? false : true}  onClick={() => { setUser(username); setPasswordContext(password), setPassword('')}}>Register</button>
                        </div>
                    </div>)}
                </li>
                </ul>
            </nav>  
        )
    }
    
export default Header;