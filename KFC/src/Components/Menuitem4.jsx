import React from 'react'
import { MenuCard3 } from './MenuCard3'
import { MenuData3 } from './MenuData3'

export const Menuitem4 = () => {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-8">
        <div className='row mt-5'>
        <h4 style={{fontWeight:"700"}}>BOX MEALS</h4>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[6].Name} Image={MenuData3[6].Image} Category={MenuData3[6].Category} Price={MenuData3[6].Price} About={MenuData3[6].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[7].Name} Image={MenuData3[7].Image} Category={MenuData3[7].Category} Price={MenuData3[7].Price} About={MenuData3[7].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[8].Name} Image={MenuData3[8].Image} Category={MenuData3[8].Category} Price={MenuData3[8].Price} About={MenuData3[8].About}/>
        </div>
        </div>

        </div>
      </div>

    </div>
  )
}
