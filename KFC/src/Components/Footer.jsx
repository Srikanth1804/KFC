import React from 'react'
import FooterLogo from "../assets/KFC Footer Logo.svg"
const Footer = () => {
  return (
    <div className='bg-black text-white p-5'>
    <div className='row mt-5'>
        <div className="col-sm-3">
            <img className='img-fluid' src={FooterLogo} alt="" />
        </div>
        <div className='col-sm-9'>
          <div className="row">
          <div className="col-4">
        <a href="" className='nav-link'>Legal</a>
        <a href="" className='nav-link'>Terms & Conditions</a>
        <a href="" className='nav-link'>Privacy Policy</a>
       </div>
        <div className="col-4">
        <a href="" className='nav-link'>Disclaimer</a>
        <a href="" className='nav-link'>About KFC</a>
        <a href="" className='nav-link'>Support</a>
        </div>
        <div className="col-4">
        <a href="" className='nav-link'>Get Help</a>
        <a href="" className='nav-link'>Contact Us</a>
        <a href="" className='nav-link'>KFC Feedback</a>
        </div>
          </div>
        </div>

    </div>
    <div className='mt-5'>
      <small><p style={{textAlign:"center"}}>Copyright © KFC Corporation 2024 All rights reserved</p></small> 
    </div>
    </div>
  )
}

export default Footer
