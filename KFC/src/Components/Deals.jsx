import React from 'react'
import banner from "../assets/Dealsbanner.svg"
import "../Style/Deals.css"
import { OffersData } from './OffersData'
import { DealsCard } from './DealsCard'
import Navbar from './Navbar'
import Footer from './Footer'
export const Deals = () => {
  return (
    <div>
      <div className='row'>
      <div className="col" style={{position:"fixed",zIndex:"1"}}>
        <Navbar/>
      </div>
      </div>
        <div className='container mt-4'>
            <img src={banner} alt="" className='img-fluid mt-5'/>
            <h1 className='text-white' id='deals-header'>OFFERS</h1>
        </div>
        <div className="container">
        <div className="row mt-5">
        <h1 style={{fontWeight:"700"}} className='mt-5'>NATIONAL OFFERS</h1>
          <div className="col-sm-4">
          <DealsCard Name={OffersData[0].Name} Image={OffersData[0].Image} About={OffersData[0].About}/>
          </div>
          <div className="col-sm-4">
          <DealsCard Name={OffersData[1].Name} Image={OffersData[1].Image} About={OffersData[1].About}/>
          </div>
          <div className="col-sm-4">
          <DealsCard Name={OffersData[2].Name} Image={OffersData[2].Image} About={OffersData[2].About}/>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-4">
          <DealsCard Name={OffersData[0].Name} Image={OffersData[0].Image} About={OffersData[0].About}/>
          </div>
          <div className="col-sm-4">
          <DealsCard Name={OffersData[1].Name} Image={OffersData[1].Image} About={OffersData[1].About}/>
          </div>
          <div className="col-sm-4">
          <DealsCard Name={OffersData[2].Name} Image={OffersData[2].Image} About={OffersData[2].About}/>
          </div>
        </div>
        </div>

      <div className="row">
        <div className="col">
          <Footer/>
        </div>
      </div>

    </div>
  )
}
