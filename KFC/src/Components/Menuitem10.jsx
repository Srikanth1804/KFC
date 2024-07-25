import React from 'react'
import { MenuCard3 } from './MenuCard3'
import { MenuData3 } from './MenuData3'
export const Menuitem10 = () => {
  return (
    <div>
        <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-8">
         <div className='row mt-5'>
         <h4 style={{fontWeight:"700"}}>SNACKS</h4>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[24].Name} Image={MenuData3[24].Image} Category={MenuData3[24].Category} Price={MenuData3[24].Price} About={MenuData3[24].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[25].Name} Image={MenuData3[25].Image} Category={MenuData3[25].Category} Price={MenuData3[25].Price} About={MenuData3[25].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[26].Name} Image={MenuData3[26].Image} Category={MenuData3[26].Category} Price={MenuData3[26].Price} About={MenuData3[26].About}/>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
