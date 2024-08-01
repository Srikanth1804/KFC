import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../Style/MenuListItems.css"
import { MenuItems } from './MenuItems';
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
import { MenuItemCard } from './MenuItemCard';
import { MenuData } from './MenuData';
import Navbar from './Navbar';
import Menuitem1 from './Menuitem1';

const Carousel1 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div id='nav-carousel'>

      <div className="list-group pt-1 pe-1"  style={{position:"sticky",top:"50px",zIndex:"1"}}>
        <Carousel 
        
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"        
       >
          <a href="#international-burger-fest" className="list-group-item list-group-item-action" style={{border:"none"}}>
           <b> INTERNATIONALBURGERFEST</b>
          </a>
          <a href="#matchday-combos" className="list-group-item list-group-item-action" style={{border:"none"}}>
            <b>MATCHDAYCOMBOS</b>
          </a>
          <a href="#value-lunch-specials" className="list-group-item list-group-item-action" style={{border:"none"}}>
            <b>VALUELUNCHSPECIALS</b>
          </a>
          <a href="#box-meals" className="list-group-item list-group-item-action" style={{border:"none"}}>
           <b> BOXMEALS</b>
          </a>
          <a href="#burgers" className="list-group-item list-group-item-action" style={{border:"none"}}>
            <b>BURGERS</b>
          </a>
          <a href="#chicken-buckets" className="list-group-item list-group-item-action" style={{border:"none"}}>
            <b>CHICKENBUCKETS</b>
          </a>
          <a href="#rice-bowlz" className="list-group-item list-group-item-action" style={{border:"none"}}>
            <b>RICEBOWLZ</b>
          </a>
          <a href="#value-snackers" className="list-group-item list-group-item-action" style={{border:"none"}}>
           <b> VALUESNACKERS</b>
          </a>
          <a href="#chicken-rolls" className="list-group-item list-group-item-action" style={{border:"none"}}>
            <b>CHICKENROLLS</b>
          </a>
          <a href="#snacks" className="list-group-item list-group-item-action" style={{border:"none"}}>
           <b> SNACKS</b>
          </a>
          <a href="#beverages" className="list-group-item list-group-item-action" style={{border:"none"}}>
            <b>BEVERAGES</b>
          </a>
        </Carousel>
      </div>

    <div className='container'>
    <div className='row' id="international-burger-fest">
        <div className='col'>
        <Menuitem1 />
        </div>
      </div>
      <div className='row' id="matchday-combos">
        <div className='col'>
        <Menuitem2 />
        </div>
      </div>
      <div className='row' id="value-lunch-specials">
       <div className='col'>
       <Menuitem3 />
       </div>
      </div>
      <div className='row' id="box-meals">
       <div className='col'>
       <Menuitem4 />
       </div>
      </div>
      <div className='row' id="burgers">
      <div className='col'>
      <Menuitem5 />
      </div>
      </div>
      <div className='row' id="chicken-buckets">
        <div className='col'>
        <Menuitem6 />
        </div>
      </div>
      <div className='row' id="rice-bowlz">
        <div className='col'>
        <Menuitem7 />
        </div>
      </div>
      <div className='row' id="value-snackers">
        <div className='col'>
        <Menuitem8 />
        </div>
      </div>
      <div className='row' id="chicken-rolls">
        <div className='col'>
        <Menuitem9 />
        </div>
      </div>
      <div className='row' id="snacks">
        <div className='col'> 
        <Menuitem10 />
        </div>
      </div>
      <div className='row' id="beverages">
        <div className='col'>
        <Menuitem11 />
        </div>
      </div>
    </div>

    </div>
  );
};

export default Carousel1;
