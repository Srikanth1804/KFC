import React from 'react'

import { Body } from './Components/Body'
import Navbar from './Components/Navbar'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { MenuItems } from './Components/MenuItems'
import { Middle } from './Components/Middle'
import { Menuitem2 } from './Components/Menuitem2'
import { Browsecategories } from './Components/Browsecategories'
import { Offers } from './Components/Offers'
import { Deals } from './Components/Deals'
import { Menuitem3 } from './Components/Menuitem3'
import { Menuitem4 } from './Components/Menuitem4'
import { Menuitem5 } from './Components/Menuitem5'
import { Menuitem6 } from './Components/Menuitem6'
import { Menuitem7 } from './Components/Menuitem7'
import { Menuitem8 } from './Components/Menuitem8'
import { Menuitem9 } from './Components/Menuitem9'
import { Menuitem10 } from './Components/Menuitem10'
import { Menuitem11 } from './Components/Menuitem11'
import SignUp from './Components/SignUp'
import Carousel from './Components/Carousel'
import Carousel1 from './Components/Carousel'
import Menuitem1 from './Components/Menuitem1'


function App() {


  return (
  <BrowserRouter>
 <Routes>
    <Route path='/' element={<Body/>}></Route> 
    <Route path='/Menu' element={<MenuItems/>}></Route>
    <Route path='/Deals' element={<Deals/>}></Route>
    <Route path='/Signin' element={<SignUp/>}></Route>
  </Routes>

  
  </BrowserRouter>



  )
}

export default App
