import React from 'react'
import "../Style/Middle.css"
import KFCimg from "../assets/KFC full-width img.webp"
import KFCimg1 from "../assets/KFC small-width img.webp"
export const Middle = () => {
  return (
    <>
    <div className='row p-4' id='middle-bg'>
      <div className="col-sm-10 mt-2">
        <p id='middletext'>LET'S ORDER FOR DELIVERY,PICK UP,OR DINE-IN</p>
      </div>
      <div className="col-sm-2">
      <a href="#" className='btn' data-bs-toggle="modal" data-bs-target="#myModal" id='middle-btn'>Start Order</a>
      </div>

      <div className="modal p-5" id="myModal" >
  <div className="modal-dialog modal-lg">
    <div className="modal-content">

      
      <div className="modal-header" >
        <h4 style={{fontWeight:700}} className="modal-title mx-auto me-5" id='modal-header'>START YOUR ORDER</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

     
      <div className="modal-body p-3">
      <h3 style={{textAlign:"center",fontWeight:700}}>How Would You Like To <br />Receive Your Order?</h3>
      <div id='modalbtns' className='p-3'>
      <button className=' modal-btn mt-3'>Delivery</button><br />
      <button className=' modal-btn mt-5'>Pick up</button><br />
      <button className=' modal-btn mt-5'>Dine In</button>
      </div>
     
      </div>

      

    </div>
  </div>
</div>



    </div>
    <div >
      <img className='img-fluid' id='kFC1' src={KFCimg} alt="" style={{width:"1500px"}} />
    </div>
    <div >
    <img className='img-fluid' id='kFC2' src={KFCimg1} alt=""/>
    </div>
    </>
  )
}
