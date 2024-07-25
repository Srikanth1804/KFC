import React from 'react'
import { MenuData3 } from './MenuData3'
import { MenuCard3 } from './MenuCard3'
export const Menuitem3 = () => {
  return (
    <div>
      <div className='row mt-5'>
        <div className="col-md-3"></div>
        <div className="col-md-8">
        <div className='row mt-5'>
        <h4 style={{fontWeight:"700"}}>VALUE LUNCH SPECIALS</h4>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[0].Name} Image={MenuData3[0].Image} Category={MenuData3[0].Category} Price={MenuData3[0].Price} About={MenuData3[0].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[1].Name} Image={MenuData3[1].Image} Category={MenuData3[1].Category} Price={MenuData3[1].Price} About={MenuData3[1].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[2].Name} Image={MenuData3[2].Image} Category={MenuData3[2].Category} Price={MenuData3[2].Price} About={MenuData3[2].About}/>
        </div>
        </div>

        <div className='row'>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[3].Name} Image={MenuData3[3].Image} Category={MenuData3[3].Category} Price={MenuData3[3].Price} About={MenuData3[3].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[4].Name} Image={MenuData3[4].Image} Category={MenuData3[4].Category} Price={MenuData3[4].Price} About={MenuData3[4].About}/>
        </div>
        <div className="col-sm-4">
        <MenuCard3 Name={MenuData3[5].Name} Image={MenuData3[5].Image} Category={MenuData3[5].Category} Price={MenuData3[5].Price} About={MenuData3[5].About}/>
        </div>
        </div>

        
        </div>
      </div>



    </div>
  )
}
