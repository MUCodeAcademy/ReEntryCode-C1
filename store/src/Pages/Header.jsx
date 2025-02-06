import '../CSS/Header.css';
import { useCart } from '../Context/CartContext';
import { NavLink } from 'react-router-dom';

function Header() {

    const { cart } = useCart();

    return (
        <div className='topnav'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <div className='search-container'>
                <form>
                    <input 
                        type='text' 
                        placeholder='Search'
                        name='search'
                    />
                    <button className='search-button'><i><img className='search-icon' src='searchIcon.png' /></i></button>
                </form>
            </div>
            <NavLink to='/cart' className='cart-holder'>
                <img className='cart-icon' src='cartIcon.png' />
                <p>
                    {cart.reduce((acc, item2) => acc + item2.quantity, 0)}
                </p>
            </NavLink>
            <div className='dropdown'>
                <button className='dropbtn'>Login&#9660;</button>
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