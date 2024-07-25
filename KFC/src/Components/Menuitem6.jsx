import React from 'react'
import { MenuCard3 } from './MenuCard3'
import { MenuData3 } from './MenuData3'
export const Menuitem6 = () => {
  return (
    <div>
            <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-8">
         <div className='row mt-5'>
         <h4 style={{fontWeight:"700"}}>CHICKEN BUCKETS</h4>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[12].Name} Image={MenuData3[12].Image} Category={MenuData3[12].Category} Price={MenuData3[12].Price} About={MenuData3[12].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[13].Name} Image={MenuData3[13].Image} Category={MenuData3[13].Category} Price={MenuData3[13].Price} About={MenuData3[13].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[14].Name} Image={MenuData3[14].Image} Category={MenuData3[14].Category} Price={MenuData3[14].Price} About={MenuData3[14].About}/>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
