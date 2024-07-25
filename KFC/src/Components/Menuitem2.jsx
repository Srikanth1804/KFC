import React from 'react'
import stripeicon from "../assets/Stripes icons.svg"
import { Menuitem2data } from './Menuitem2data'
import { Menuitem2card } from './Menuitem2card'
import "../Style/MenuListItems.css"
export const Menuitem2 = () => {
  return (
    <div className='row mt-5'>
         <div className="col-md-3">
</div>
<div className="col-md-8">
    <div className='row mt-5'>
    <h4 style={{fontWeight:700}}>MATCH DAY COMBOS</h4>
          <div className="col-sm-4">
          <Menuitem2card Name={Menuitem2data[0].Name} Image={Menuitem2data[0].image} Category={Menuitem2data[0].category} Price={Menuitem2data[0].Price} About={Menuitem2data[0].About}/>
          </div>
          <div className="col-sm-4">
          <Menuitem2card Name={Menuitem2data[1].Name} Image={Menuitem2data[1].image} Category={Menuitem2data[1].category} Price={Menuitem2data[1].Price} About={Menuitem2data[1].About}/>
          </div>
          <div className="col-sm-4">
          <Menuitem2card Name={Menuitem2data[2].Name} Image={Menuitem2data[2].image} Category={Menuitem2data[2].category} Price={Menuitem2data[2].Price} About={Menuitem2data[2].About}/>
           </div>
    </div>
    <div className='row'>
          <div className="col-sm-4">
          <Menuitem2card Name={Menuitem2data[3].Name} Image={Menuitem2data[3].image} Category={Menuitem2data[3].category} Price={Menuitem2data[3].Price} About={Menuitem2data[3].About}/>
       </div>
       <div className="col-sm-4">
          <Menuitem2card Name={Menuitem2data[4].Name} Image={Menuitem2data[4].image} Category={Menuitem2data[4].category} Price={Menuitem2data[4].Price} About={Menuitem2data[4].About}/>
         </div>
          <div className="col-sm-4">
          <Menuitem2card Name={Menuitem2data[5].Name} Image={Menuitem2data[5].image} Category={Menuitem2data[5].category} Price={Menuitem2data[5].Price} About={Menuitem2data[5].About}/> 
         </div>
    </div>
</div>
    </div>
  )
}
