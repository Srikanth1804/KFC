import React from 'react'
import { MenuCard3 } from './MenuCard3'
import { MenuData3 } from './MenuData3'
export const Menuitem9 = () => {
  return (
    <div>
        <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-8">
         <div className='row mt-5'>
         <h4 style={{fontWeight:"700"}}>CHICKEN ROLLS</h4>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[21].Name} Image={MenuData3[21].Image} Category={MenuData3[21].Category} Price={MenuData3[21].Price} About={MenuData3[21].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[22].Name} Image={MenuData3[22].Image} Category={MenuData3[22].Category} Price={MenuData3[22].Price} About={MenuData3[22].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[23].Name} Image={MenuData3[23].Image} Category={MenuData3[23].Category} Price={MenuData3[23].Price} About={MenuData3[23].About}/>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
