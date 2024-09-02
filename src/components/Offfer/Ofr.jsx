import React from 'react'
// import '../Ofr'
import './Ofr.css'
// import Girspic from '../Assets/girspic'
import grl1 from '../Assets/grl1.webp'


const Ofr = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offer For You</h1>
            <p>ONLY ON BEST FOR PROPERTY</p>
            <button className='btn2'>Button</button>
        </div>
        <div className="offer-right">
            {/* <img className='img3' src={grl1} alt="" /> */}
        </div>
    </div>
  )
}

export default Ofr