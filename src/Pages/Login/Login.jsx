import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

function Login() {
  return (
    <div className='login'>
      <img src={logo} alt=""/>
      <div className="login-form">
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder="Username " />
          <input type="email" placeholder="Email " />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
          <div className="form-help">
           <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
