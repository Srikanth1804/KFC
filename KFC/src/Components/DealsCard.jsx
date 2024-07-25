import React from 'react'
import "../Style/Deals.css"
export const DealsCard = (props) => {
  return (
    <div>
         <div className="card m-3" id='Dealscard'>
            <div className="card-body">
                <img src={props.Image} alt="" className='img-fluid' />
                <h2 className='text-danger' style={{fontWeight:"700"}}>{props.Name}</h2>
                <p>{props.About}</p>
                <div>
                    <div className='text-center'>
                        <button className='btn' id='offer-btn'><b>Apply Offer</b></button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
