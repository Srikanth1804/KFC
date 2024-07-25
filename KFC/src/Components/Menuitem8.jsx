import React from 'react'
import { MenuCard3 } from './MenuCard3'
import { MenuData3 } from './MenuData3'
export const Menuitem8 = () => {
  return (
    <div>
        <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-8">
         <div className='row mt-5'>
         <h4 style={{fontWeight:"700"}}>VALUE SNACKERS</h4>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[18].Name} Image={MenuData3[18].Image} Category={MenuData3[18].Category} Price={MenuData3[18].Price} About={MenuData3[18].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[19].Name} Image={MenuData3[19].Image} Category={MenuData3[19].Category} Price={MenuData3[19].Price} About={MenuData3[19].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[20].Name} Image={MenuData3[20].Image} Category={MenuData3[20].Category} Price={MenuData3[20].Price} About={MenuData3[20].About}/>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
