import React from 'react'
import './Newlatter.css'

const Newlatter = () => {
  return (
    <div className="newslatter">
        <h1>Gets Exlusive Offer On Your Email</h1>
        <p>Subscribe  to our new latter and stay udated</p>
        <div>
            <input type="email" placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newlatter