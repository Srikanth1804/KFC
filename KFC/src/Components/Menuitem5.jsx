import React from 'react'
import { MenuCard3 } from './MenuCard3'
import { MenuData3 } from './MenuData3'
export const Menuitem5 = () => {
  return (
    <div>

         <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-8">
         <div className='row mt-5'>
         <h4 style={{fontWeight:"700"}}>BURGERS</h4>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[9].Name} Image={MenuData3[9].Image} Category={MenuData3[9].Category} Price={MenuData3[9].Price} About={MenuData3[9].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[10].Name} Image={MenuData3[10].Image} Category={MenuData3[10].Category} Price={MenuData3[10].Price} About={MenuData3[10].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[11].Name} Image={MenuData3[11].Image} Category={MenuData3[11].Category} Price={MenuData3[11].Price} About={MenuData3[11].About}/>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
