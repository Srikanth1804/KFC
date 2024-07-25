import React from 'react'
import { BrowseData } from './BrowseData'
import { BrowseCard } from './BrowseCard'
export const Browsecategories = () => {
  return (
    <>
    <div className='container'>
        <h1 style={{fontWeight:"bolder"}}>BROWSE CATEGORIES</h1>
    <div className='row'>
        <div className="col-sm-3">
        <BrowseCard Name={BrowseData[0].Name} Image={BrowseData[0].IMG}/>
        </div>
        <div className="col-sm-3">
        <BrowseCard Name={BrowseData[1].Name} Image={BrowseData[1].IMG}/>
        </div>
        <div className="col-sm-3">
        <BrowseCard Name={BrowseData[2].Name} Image={BrowseData[2].IMG}/>
        </div>
        <div className="col-sm-3">
        <BrowseCard Name={BrowseData[3].Name} Image={BrowseData[3].IMG}/>
        </div>

    </div>

         <div className="row">
         <div className="col-sm-3">
        <BrowseCard Name={BrowseData[4].Name} Image={BrowseData[4].IMG}/>
        </div>
        <div className="col-sm-3">
        <BrowseCard Name={BrowseData[5].Name} Image={BrowseData[5].IMG}/>
        </div>
        <div className="col-sm-3">
        <BrowseCard Name={BrowseData[6].Name} Image={BrowseData[6].IMG}/>
        </div>
        <div className="col-sm-3">
        <BrowseCard Name={BrowseData[7].Name} Image={BrowseData[7].IMG}/>
        </div>
            </div>
            </div>
            </>
  )
}
