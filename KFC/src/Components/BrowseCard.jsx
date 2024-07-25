import React from 'react'
import { Link } from 'react-router-dom'
export const BrowseCard = (props) => {
  return (
    <div>
        <div className="card m-2" style={{border:"none"}}>
            <div className="card-body">
              <Link to="/Menu">
              <img src={props.Image} alt="" className='img-fluid'/>
              </Link>
              <h6 className='mt-3' style={{textAlign:"center",fontWeight:700}}>{props.Name}</h6>
            </div>
        </div>
        
    </div>
  )
}
