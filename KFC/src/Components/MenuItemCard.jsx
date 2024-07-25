import React from 'react'
import Addtocart from "../assets/Icon Add to Cart.svg"
export const MenuItemCard = (props) => {
  return (
    <>
    
    <div className='card ' id='menuitem2' style={{margin:"5px"}}>
        <div className="card-body">
            <img src={props.Img} alt="" srcset="" className='img-fluid' />
            <h4>{props.Name}</h4>
            <h6>{props.Category}</h6>
            <h5>{props.Price}</h5>
            <p>{props.About}</p>
            <div className='text-center mt-auto'>
            <button className='btn btn-danger' style={{borderRadius:50}}>Add to Cart <img src={Addtocart} alt="" /></button>
            </div>
        </div>
        
    </div>
    </>
  )
}
