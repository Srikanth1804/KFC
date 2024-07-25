import React from 'react'
import"../Style/MenuListItems.css";
import { MenuItemCard } from './MenuItemCard';
import {MenuData} from "./MenuData";
import stripeicon from "../assets/Stripes icons.svg"
import { Menuitem2 } from './Menuitem2';
import { Menuitem3 } from './Menuitem3';
import { Menuitem4 } from './Menuitem4';
import { Menuitem5 } from './Menuitem5';
import { Menuitem6 } from './Menuitem6';
import { Menuitem7 } from './Menuitem7';
import { Menuitem8 } from './Menuitem8';
import { Menuitem9 } from './Menuitem9';
import { Menuitem10 } from './Menuitem10';
import { Menuitem11 } from './Menuitem11';
import Navbar from './Navbar';
import Footer from './Footer';
import Carousel1 from './Carousel';
import Menuitem1 from './Menuitem1';
export const MenuItems = () => {
  return (
    <>
  <div className='row bg-white'>
    <div className="col"  id='menu-navbar'>
      <Navbar/>
    </div>
  </div>


    <div className='row' id='menuitem'>
        <div className="col-md-3" id='menu-list'>

        <div className="list-group no-border">
          <img src={stripeicon} alt="" className='img-fluid ms-3' id='stripe-img' style={{width:50}} />
  <h2 className='ms-3 mt-3'>KFC MENU</h2>
  <a href="#A" className="list-group-item list-group-item-action mt-2">
    INTERNATIONAL BURGER FEST
  </a>
  <a href="#B" className="list-group-item list-group-item-action mt-2">
    MATCHDAY COMBOS
  </a>
  <a href="#C" className="list-group-item list-group-item-action mt-2">
    VALUE LUNCH SPECIALS
  </a>
  <a href="#D" className="list-group-item list-group-item-action mt-2">
    BOX MEALS
  </a>
  <a href="#E" className="list-group-item list-group-item-action mt-2">
    BURGERS
  </a>
  <a href="#F" className="list-group-item list-group-item-action mt-2">
    CHICKEN BUCKETS
  </a>
  <a href="#G" className="list-group-item list-group-item-action mt-2">
    RICE BOWLZ
  </a>
  <a href="#H" className="list-group-item list-group-item-action mt-2">
    VALUE SNACKERS
  </a>
  <a href="#I" className="list-group-item list-group-item-action mt-2">
    CHICKEN ROLLS
   </a>
   <a href="#J" className="list-group-item list-group-item-action mt-2">
      SNACKS
   </a> 
   <a href="#K" className="list-group-item list-group-item-action mt-2">
   BEVERAGES
   </a> 
</div>
     </div>



       <div className='col-md-8' id='menu-card' >
        <div>
          <input type="text" id='search-text' style={{borderRadius:50,padding:10}} className='mt-3' placeholder='Search our menu'/>
          <hr />
        </div>
       </div>
     <div id='A'>
      <Menuitem1/>
      </div>  
       
      <div id='B'>
      <Menuitem2/>
      </div>
      <div id='C'>
      <Menuitem3/>
      </div>
      <div id='D'>
      <Menuitem4/>
      </div>
      <div id='E'>
      <Menuitem5/>
      </div>
      <div id='F'>
      <Menuitem6/>
      </div>
      <div id='G'>
      <Menuitem7/>
      </div>
      <div id='H'>
      <Menuitem8/>
      </div>
      <div id='I'>
      <Menuitem9/>
      </div>
      <div id='J'>
      <Menuitem10/>
      </div>
      <div id='K'>
      <Menuitem11/>
      </div>

    </div>
    <div>
      <Carousel1/>
    </div>
    <div className='row' >
    <div className="col" style={{zIndex:"1"}}>
      <Footer/>
    </div>
  </div>

    </>
  )
}
