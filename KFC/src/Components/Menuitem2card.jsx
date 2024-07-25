import React from 'react'
import Addtocart from "../assets/Icon Add to Cart.svg"
import "../Style/MenuListItems.css"
export const Menuitem2card = (props) => {
  return (
    <div >
        
        <div className="card" id='menuitem2' style={{margin:"5px"}}>
            <div className="card-body">
                <img src={props.Image} alt="" className='img-fluid' />
                <h4>{props.Name}</h4>
                <h6>{props.Category}</h6>
                <h5>{props.Price}</h5>
                <p>{props.About}</p>
                <div className='text-center'>
                <button className='btn btn-danger' style={{borderRadius:50}}>Add to Cart <img src={Addtocart} alt="" /></button>
                </div>
            </div>
        </div>
      

    </div>
  )
}
