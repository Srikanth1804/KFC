import React from 'react'
import { MenuCard3 } from './MenuCard3'
import { MenuData3 } from './MenuData3'
export const Menuitem7 = () => {
  return (
    <div>
        <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-8">
         <div className='row mt-5'>
         <h4 style={{fontWeight:"700"}}>RICE BOWLZ</h4>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[15].Name} Image={MenuData3[15].Image} Category={MenuData3[15].Category} Price={MenuData3[15].Price} About={MenuData3[15].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[16].Name} Image={MenuData3[16].Image} Category={MenuData3[16].Category} Price={MenuData3[16].Price} About={MenuData3[16].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[17].Name} Image={MenuData3[17].Image} Category={MenuData3[17].Category} Price={MenuData3[17].Price} About={MenuData3[17].About}/>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
