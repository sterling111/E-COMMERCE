import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

const LoginSignup = () => {
  return (
    <div className='loginSignUp'>
      <div className='loginSignUp-container'>
        <h1>Sign Up</h1>
        <div className='loginSignUp-fields'>
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
        </div>
        <Link to = '/login'>
        <button>Continue</button>
        </Link>
        <p className='loginSignUp-login'>Already have an account?
          <Link to='/login'>
            <span>Login In Here</span>
          </Link>
          </p>
          <div className='loginSignUp-agree'>
            <input type='checkBox' name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
      </div>
    </div>
  )
}

export default LoginSignup
