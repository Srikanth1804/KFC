import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { OffersCard } from './OffersCard';
import { OffersData } from './OffersData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Carousel2 = () => {


// Custom arrow components
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="custom-left-arrow"
      style={{ 
        position: 'absolute', 
        left: '10px', 
        top: '50%', 
        transform: 'translateY(-50%)', 
        zIndex: 1,
        backgroundColor: '#00000080',
        color:"white",
        border: 'none',
        borderRadius:"5px",
        padding:"10px",
        fontSize: '20px',
        cursor: 'pointer'
      }}
    >
          <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="custom-right-arrow"
      style={{ 
        position: 'absolute', 
        right: '10px', 
        top: '50%', 
        transform: 'translateY(-50%)', 
        zIndex: 1,
        backgroundColor: '#00000080',
        color:"white",
        border: 'none',
        borderRadius:"5px",
        padding:"10px",
        fontSize: '20px',
        cursor: 'pointer'
      }}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
};


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1500, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className='bg-black text-white'>
      <div className='container p-5'>
        <h2 style={{fontWeight:"700"}}>EXCLUSIVE OFFERS FOR YOU</h2>
      <Carousel responsive={responsive}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
      >
  <div>
<OffersCard Name={OffersData[0].Name} Image={OffersData[0].Image} About={OffersData[0].About}/>
  </div>
  <div>
  <OffersCard Name={OffersData[1].Name} Image={OffersData[1].Image} About={OffersData[1].About}/>
  </div>
  <div>
  <OffersCard Name={OffersData[2].Name} Image={OffersData[2].Image} About={OffersData[2].About}/>
  </div>
  <div>
 <OffersCard Name={OffersData[3].Name} Image={OffersData[3].Image} About={OffersData[3].About}/>
 </div>
 <div>
 <OffersCard Name={OffersData[4].Name} Image={OffersData[4].Image} About={OffersData[4].About}/>
 </div>
 <div>
 <OffersCard Name={OffersData[5].Name} Image={OffersData[5].Image} About={OffersData[5].About}/>
  </div>
  <div>
<OffersCard Name={OffersData[0].Name} Image={OffersData[0].Image} About={OffersData[0].About}/>
  </div>
  <div>
  <OffersCard Name={OffersData[1].Name} Image={OffersData[1].Image} About={OffersData[1].About}/>
  </div>
  <div>
  <OffersCard Name={OffersData[2].Name} Image={OffersData[2].Image} About={OffersData[2].About}/>
  </div>
</Carousel>


      </div>

    </div>
  )
}

export default Carousel2

