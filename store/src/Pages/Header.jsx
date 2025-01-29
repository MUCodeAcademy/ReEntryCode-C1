import '../CSS/Header.css';

function Header() {

    return (
        <div className='topnav'>
            <a>Home</a>
            <a>Products</a>
            <a>Home</a>
            <div className='search-container'>
                <form>
                    <input 
                        type='text' 
                        placeholder='Search'
                        name='search' 
                    />
                    <button><i>&#x1F50D;</i></button>
                </form>
            </div>
            <div className='cart-holder'>
                <img className='cart-icon' src='cartIcon.png' />
                <p>3</p>
            </div>
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