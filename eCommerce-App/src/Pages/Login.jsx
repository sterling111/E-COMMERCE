import { Link } from 'react-router-dom'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='loginSignUp'>
            <div className='loginSignUp-container'>
                <h1>Login</h1>
                <div className='loginSignUp-fields'>
                    <input type='email' placeholder='Email Address' />
                    <input type='password' placeholder='Password' />
                </div>
                <Link to = '/'>
                <button>Login</button>
                </Link>
                <p className='loginSignUp-login'>Do not have an account?
                    <Link to='/signup'>
                        <span>Sign Up</span>
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default LoginSignup
