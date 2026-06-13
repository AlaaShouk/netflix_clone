import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

function Login() {

  const [signState , setSignState] = React.useState("Sigin In")

  return (
    <div className='login'>
      <img src={logo} alt="" className="login-logo"/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up"? <input type="text" placeholder="Username " />: <></>}
          <input type="email" placeholder="Email " />
          <input type="password" placeholder="Password" />
          <button type="submit">{signState}</button>
          <div className="form-help">
           <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sgin In"?  <p>  New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up now</span></p> 
          : <p>Already Have Account ? <span onClick={() => setSignState("Sgin In")}>Sign In Now</span></p> }
        
        </div>
      </div>
    </div>
  )
}

export default Login
