import React from 'react'
import { OffersData } from './OffersData'
import { OffersCard } from './OffersCard'
import "../Style/Offers.css"
export const Offers = () => {
  return (
    <div>
        <>
  {/* Carousel */}
  <div id="demo" className="carousel slide" data-bs-ride="carousel">
    {/* Indicators/dots */}
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to={0}
        className="active"
      />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={3} />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={4} />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={5} />
    </div>
    {/* The slideshow/carousel */}
    <div className="carousel-inner bg-black">
      <div className="carousel-item active" >
      <OffersCard Name={OffersData[0].Name} Image={OffersData[0].Image} About={OffersData[0].About}/>
      </div>
      <div className="carousel-item ">
      <OffersCard Name={OffersData[1].Name} Image={OffersData[1].Image} About={OffersData[1].About}/>
      </div>
      <div className="carousel-item">
      <OffersCard Name={OffersData[2].Name} Image={OffersData[2].Image} About={OffersData[2].About}/>
      </div>
      <div className="carousel-item">
      <OffersCard Name={OffersData[3].Name} Image={OffersData[3].Image} About={OffersData[3].About}/>
      </div>
      <div className="carousel-item ">
      <OffersCard Name={OffersData[4].Name} Image={OffersData[4].Image} About={OffersData[4].About}/>
      </div>
      <div className="carousel-item">
      <OffersCard Name={OffersData[5].Name} Image={OffersData[5].Image} About={OffersData[5].About}/>
      </div>
    </div>
    {/* Left and right controls/icons */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" />
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" />
    </button>
  </div>
</>
    </div>
  )
}
