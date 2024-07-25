import React from 'react'
import { MenuCard3 } from './MenuCard3'
import { MenuData3 } from './MenuData3'
export const Menuitem11 = () => {
  return (
    <div>
        <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-8">
         <div className='row mt-5'>
         <h4 style={{fontWeight:"700"}}>BEVERAGES</h4>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[27].Name} Image={MenuData3[27].Image} Category={MenuData3[27].Category} Price={MenuData3[27].Price} About={MenuData3[27].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[28].Name} Image={MenuData3[28].Image} Category={MenuData3[28].Category} Price={MenuData3[28].Price} About={MenuData3[28].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[29].Name} Image={MenuData3[29].Image} Category={MenuData3[29].Category} Price={MenuData3[29].Price} About={MenuData3[29].About}/>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
