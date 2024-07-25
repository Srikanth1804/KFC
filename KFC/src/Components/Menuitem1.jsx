import React from 'react'
import"../Style/MenuListItems.css";
import { MenuItemCard } from './MenuItemCard';
import {MenuData} from "./MenuData";
const Menuitem1 = () => {
  return (
    <div className='row mt-5'>
         <div className="col-md-3">
</div>
<div className="col-md-8" id='bg-color' >
        <div className='row mt-5'>
        <h4 style={{fontWeight:"700"}}>INTERNATIONAL BURGER FEST</h4>
          <div className='col-sm-4'>
          <MenuItemCard  Name={MenuData[0].Name} Img={MenuData[0].image} Category={MenuData[0].category} Price={MenuData[0].Price} About={MenuData[0].About} /> 
          </div>
          <div className='col-sm-4'>
          <MenuItemCard  Name={MenuData[1].Name} Img={MenuData[1].image} Category={MenuData[1].category} Price={MenuData[1].Price} About={MenuData[1].About} /> 
          </div>
          <div className='col-sm-4'>
          <MenuItemCard  Name={MenuData[2].Name} Img={MenuData[2].image} Category={MenuData[2].category} Price={MenuData[2].Price} About={MenuData[2].About} /> 
          </div>
        </div>
       
        <div className='row'>
          <div className='col-sm-4'>
          <MenuItemCard  Name={MenuData[3].Name} Img={MenuData[3].image} Category={MenuData[3].category} Price={MenuData[3].Price} About={MenuData[3].About} /> 
          </div>
          <div className='col-sm-4'>
          <MenuItemCard  Name={MenuData[4].Name} Img={MenuData[4].image} Category={MenuData[4].category} Price={MenuData[4].Price} About={MenuData[4].About} /> 
          </div>
          <div className='col-sm-4'>
          <MenuItemCard  Name={MenuData[5].Name} Img={MenuData[5].image} Category={MenuData[5].category} Price={MenuData[5].Price} About={MenuData[5].About} /> 
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-4'>
          <MenuItemCard  Name={MenuData[6].Name} Img={MenuData[6].image} Category={MenuData[6].category} Price={MenuData[6].Price} About={MenuData[6].About} /> 
          </div>
          <div className='col-sm-4'>
          <MenuItemCard  Name={MenuData[7].Name} Img={MenuData[7].image} Category={MenuData[7].category} Price={MenuData[7].Price} About={MenuData[7].About} /> 
          </div>
          <div className='col-sm-4'>
          <MenuItemCard  Name={MenuData[8].Name} Img={MenuData[8].image} Category={MenuData[8].category} Price={MenuData[8].Price} About={MenuData[8].About} /> 
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-4'>
          <MenuItemCard  Name={MenuData[9].Name} Img={MenuData[9].image} Category={MenuData[9].category} Price={MenuData[9].Price} About={MenuData[9].About} /> 
          </div>
          <div className='col-sm-4'>
          <MenuItemCard  Name={MenuData[10].Name} Img={MenuData[10].image} Category={MenuData[10].category} Price={MenuData[10].Price} About={MenuData[10].About} /> 
          </div>
        </div>

        </div>

    </div>
  )
}

export default Menuitem1
