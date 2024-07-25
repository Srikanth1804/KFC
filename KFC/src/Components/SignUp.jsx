import React from 'react'
import Logo from "../assets/KFC Logo.svg"
import "../Style/SignUp.css"
const SignUp = () => {
  return (
    <div className='container mt-5'>
      <div className='mt-5' style={{textAlign:"center"}}>
        <p>Sign In / Sign Up</p>
        <img src={Logo} alt="" className='img-fluid mt-3' />
        <h6 style={{fontWeight:"800"}} className='mt-4'>LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</h6>
      </div>
      <div className='mt-5' style={{textAlign:"center"}}>
      <input id='signup-input' type="number" placeholder='Phone Number*'/><br />
      </div>
      <div className='mt-4' style={{textAlign:"center"}}>
      <small >By “logging in to KFC”, you agree to our Privacy Policy and Terms & Conditions.</small><br />
      <button className='btn bg-black text-white mt-5' id='code-btn' style={{borderRadius:"100px"}}>Send Me a code</button>
      </div>
      <div className='mt-4' style={{textAlign:"center"}}>
       <p id='line'>(or) </p>
      </div>
      <div className='mt-4' style={{textAlign:"center"}}>
        <button className='btn' id='skip-btn'><h6>Skip,Continue As guest</h6></button>
      </div>
    </div>
  )
}

export default SignUp
