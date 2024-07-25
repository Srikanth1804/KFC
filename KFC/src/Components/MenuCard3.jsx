import React from 'react'
import Addtocart from "../assets/Icon Add to Cart.svg"
export const MenuCard3 = (props) => {
  return (
    <div>
        <div className="card" id='menuitem2' style={{margin:"5px"}}>
            <div className="card-body">
                <img src={props.Image} alt="" className='img-fluid'/>
                <h4>{props.Name}</h4>
                <p>{props.Category}</p>
                <h6>{props.Price}</h6>
                <p>{props.About}</p>
                <div className="text-center">
                <button className='btn btn-danger' style={{borderRadius:50}}>Add to Cart <img src={Addtocart} alt="" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}
