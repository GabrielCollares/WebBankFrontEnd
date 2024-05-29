import React from 'react'
import ReactDOM from 'react-dom/client'
import './login.css'

function LoginPage() {

    return (

        <>
       
       <div className="container">
  <div className="left">
      
<div className='formlogin'>
    <div className="header">
      <h2 className="animation a1">Welcome Back</h2>
      <h4 className="animation a2">Log in to your account using email and password</h4>
    </div>
    <div className="form">
      <input type="email" className="form-field animation a3" placeholder="Email Address"/>
      <input type="password" className="form-field animation a4" placeholder="Password"/>
      <p className="animation a5"><a href="/register">Create an account</a></p>
      <form className="formdologin1" action='/'>
      <button type='submit' className="animation a6">LOGIN</button>
      </form>
  
    </div>


    </div>
  </div>
  <div className="right"></div>
</div>
    </>
    )
}

export default LoginPage