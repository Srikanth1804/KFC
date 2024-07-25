import React from 'react'
import { MenuItems } from './MenuItems'
import Navbar from './Navbar'
import { Middle } from './Middle'
import { Browsecategories } from './Browsecategories'
import { Offers } from './Offers'
import Footer from './Footer'
import CarouselComponent from './Carousel'
import Carousel2 from './Carousel2'
export const Body = () => {
  return (
    <div>

<Navbar/>
<Middle/>
<Browsecategories/>
<Carousel2/>
<Footer/>


    </div>
  )
}
