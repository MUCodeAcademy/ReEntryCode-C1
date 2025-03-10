import '../CSS/LoginRegister.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useUser } from "../Context/UserContext"

function Register() {
    // register database 
    function createaccount() {
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password, email: email })
        })
        .then(response => response.json()) // takes our response from the server and parses it as a JSON
        .then(data => console.log(data))
        .catch(error => console.error(error)); 
    }

    // if username is not avaible in data base
    const [validUsername, setValidUsername ] = useState(null)
    const [usernameTaken, setUsernameTaken] = useState(false);

    function checkUsername() {
        fetch('http://localhost:3000/check-username', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username })
        })
        .then(response => response.json())
        .then(data => setUsernameTaken(data))
        .catch(error => console.log(error));
    }

    // USERv1
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // USERv2
    const { currentUser, setUser, clearUser } = useUser();
    const navigate = useNavigate();
    
    // VALIDATIONS
    const upperCaseLetters = /[A-Z]/g;
    const lowerCaseLetters = /[a-z]/g;
    const numbers = /[0-9]/g;
    const special = /[\p{P}\p{S}]/u;
    const noSpace = /\s/
    
    // VALIDATION STATES
    const [validUpperCase, setValidUpperCase] = useState(false);
    const [validLowerCase, setValidLowerCase] = useState(false);
    const [validNumber, setValidNumber] = useState(false)
    const [validSpecial, setValidSpecial] = useState(false);
    const [validLength, setValidLength] = useState(false);
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    const [clickPassword, setClickPassword] = useState(false);
    const [clickUsername, setClickUsername] = useState(false);
    

    // USERNAME REQUIREMENTS

    const [validUsernameLength, setValidUsernameLength] = useState(false);
    const [validNoSpace, setValidNoSpace] = useState(false);

    useEffect(() => {
        setValidUsernameLength(username.length >= 6 && username.length <= 16)
        setValidNoSpace(!noSpace.test(username));

        if(username.length > 0 || clickUsername == true) {
            setValidUsername(username && validUsernameLength && validNoSpace && !usernameTaken);
        }
    }, [username, clickUsername, usernameTaken, currentUser])

// VALIDATION PASSWORD
    useEffect(() => {
        setValidUpperCase(upperCaseLetters.test(password));
        setValidLowerCase(lowerCaseLetters.test(password));
        setValidNumber(numbers.test(password));
        setValidSpecial(special.test(password));
        setValidLength(password.length >= 8);

        if(password.length > 0 || clickPassword == true) {
            setValidPassword(password && validUpperCase && validLowerCase && validNumber && validLength && validSpecial && password === confirmPasswordValue);
        }
    }, [password, confirmPasswordValue, clickPassword, currentUser]);

    return (
        <div className={`main-box-signup ${isFocused ? "main-box-signup-focus" : ""}`}>
            <div className='second-box-signup'>
                <h1 className='top'>Sign Up</h1>
                {/* USERNAME */}
                <p>Username</p>
                <input 
                    type="text" 
                    className={`input-login ${(!validUsername && clickUsername) ? 'not-valid' : ''}`}
                    onChange={(e) => setUsername(e.target.value)}
                    onBlur={() => checkUsername()}
                    onFocus={() => {setIsFocused(true); setClickUsername(true)}}
                />
                {(isFocused) && 
                    <div id="message">
                        <p id="letter" className={`${validNoSpace ? 'valid' : 'invalid'}`}>No <b>spaces</b></p>
                        <p id="length" className={`${validUsernameLength ? 'valid' : 'invalid'}`}><b>6-16</b> characters</p>
                        <p id="length" className={`${usernameTaken ? 'valid' : 'invalid'}`}>{usernameTaken.toString()}</p>
                    </div>
                }
                {/* EMAIL */}
                <p>Email address</p>
                <input 
                    type="email" 
                    className='input-login'
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* PASSWORD */}
                <p>Password</p>
                <div className='password-container'>
                    <input 
                        type={`${showPassword ? 'text' : 'password'}`} 
                        className={`input-login ${(!validPassword && clickPassword) ? 'not-valid' : ''}`}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => {setIsFocused(true); setClickPassword(true)}}
                    />
                    <button 
                        onClick={() => {setShowPassword(!showPassword)}}
                        className='show-password'
                        onMouseDown={(e) => e.preventDefault()}
                    >
                    {showPassword ? 'Hide' : 'Show'}   
                    </button>
                </div>
                {(isFocused) && 
                    <div id="message">
                        <p id="letter" className={`${validLowerCase ? 'valid' : 'invalid'}`}>A <b>lowercase</b> letter</p>
                        <p id="capital" className={`${validUpperCase ? 'valid' : 'invalid'}`}>A <b>uppercase</b> letter</p>
                        <p id="number" className={`${validNumber ? 'valid' : 'invalid'}`}>A <b>number</b></p>
                        <p id="unicode" className={`${validSpecial ? 'valid' : 'invalid'}`}>A <b>speical characters (!@#$%^&*-+_)</b></p>
                        <p id="length" className={`${validLength ? 'valid' : 'invalid'}`}>Minimum <b>8 characters</b></p>
                    </div>
                }
                {/* CONFIRM PASSWORD */}
                <p>Confirm Password</p>
                <input 
                    type={`${showPassword ? 'text' : 'password'}`} 
                    className={`input-login ${(!validPassword && clickPassword) ? 'not-valid' : ''}`}
                    onChange={(e) => setConfirmPasswordValue(e.target.value)}
                />
                {/* CREATE ACCOUNT BUTTON */}
                <button
                    disabled={validPassword && validUsername ? false : true} 
                    type="submit" 
                    className="submit-button"
                    onClick={() => { setUser(username); navigate('/'); createaccount()}}

                >Create Account</button>
                <div className='create-account'>
                    <Link to='/login' className='atag' href=''>Already have an account?</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;