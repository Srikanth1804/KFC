import React from 'react'
import Logo from "../assets/KFC Logo.svg";
import Signin from "../assets/Sign in img.svg"
import Bucketcart from "../assets/bucket_cart_icon.svg"
import Deals from "../assets/Deals.png"
import Menu from "../assets/menu__1.png"
import "../Style/Navbar.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>

    <div className='row bg-white'id='navbar1' style={{position:"sticky",top:"0px",zIndex:"2"}}> 
<div className='col-10'>

    <nav className="navbar navbar-expand-sm">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
    <div className="collapse navbar-collapse " id="collapsibleNavbar" >
      <ul className="navbar-nav mt-2 ms-5">
        <li className="nav-item">
          <Link to="/Menu" className="nav-link "><b>Menu</b></Link>
        </li>
        <li className="nav-item ms-5">
          <Link to="/Deals" className='nav-link'><b>Deals</b></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>


<div className='col-1 mt-3'>
  <ul className='navbar-nav'>
  <li className="nav-item ">
    <Link to="/Signin" className="nav-link" id='nav-list3'><img src={Signin} alt="" /><b>  Sign In</b></Link>
        </li> 
  </ul>
</div >
<div className='col-1 mt-3' id='bucketcart'>
<span >₹0<img src={Bucketcart} style={{width:40}}  alt="" /></span>
</div>
</div>


 


<div className='row' id='navbar2' style={{position:"sticky",top:"0px",zIndex:"2"}}>
<nav className="navbar navbar-expand-sm bg-white col-10">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" style={{marginLeft:5}} >
      <span className="navbar-toggler-icon"></span>
    </button>
      <a className="navbar-brand" href="#" style={{marginRight:150}}> <img src={Logo} alt="" srcset="" />  </a> 
 
  
    <div className="collapse navbar-collapse mt-5 ms-5" id="collapsibleNavbar">
      <h1 className='font'>LET'S GET COOKIN'</h1>
      <Link className='nav-link' to="/Signin">
      <span className='ms-3'><img className='img-fluid' src={Signin} alt="" />   Sign in / Sign up </span>
      </Link>
      <div className='card mt-3'>
        <Link to="/Menu" className='nav-link'>
      <div className='card-body' >
        <div className='row'>
        <div className='col-8 mt-4'>
          <b>MENU</b>
        </div>
        <div className='col-4'>
          <img className='img-fluid'  src={Menu} alt="" />
        </div>
        </div>
      </div>
      </Link>
      </div>
      <div className='card mt-3'>
        <Link to="/Deals" className='nav-link'>
      <div className='card-body'>
        <div className='row'>
        <div className='col-8 mt-4'>
          <b>DEALS</b>
        </div>
        <div className='col-4'>
          <img className='img-fluid'  src={Deals} alt="" />
        </div>
        </div>
      </div>
      </Link>
      </div>

      <div>
      <div className='card mt-5'>
        <div className='card-body'>
       <div>
        <p className='nav2-font'>Get Help</p>
        <p className='mt-5 nav2-font'>Contact Us</p>
        <p className='mt-5 nav2-font'>KFC Feedback</p>
        <p className='mt-5 nav2-font'>Privacy Policy</p>
       </div>
        </div>
      </div>
      </div>

  </div>
  </div>
</nav>
<div className="col-2 bg-white">
  <img src={Bucketcart} alt="" srcset="" className='img-fluid mt-1' />
</div>

</div>




</>
  )
}

export default Navbar 

