import React from 'react'
import './Hero.css'
// import Pic4 from '../src/Assets/pic4.jpg';
// import Pic5 from '../src/Assets/pic5.png';
// import pic4 from '../Assets/pic4.jpg'
import hi from '../Assets/hi.png'
import grnryt from '../Assets/grnryt.png'
import home from '../Assets/home.jpg'
// import right-arrow from '../Assets/right-arrow.png'




const Hero = () => {
    return (
        
            <div className="hero">
                <div className="hero-left">
                    <h2>NEW property ONLY</h2>
                    <div >
                        <div className="hero-hand-icon">
                            <p>Land</p>
                            <img src={hi} alt="" />
                        </div>
                        <p>find more</p>
                        <p>reliable</p>
                    </div>
                    <div className="hero-latest-button">
                        <div>best property</div>
                        <img src={grnryt} alt="" />
                    </div>
                </div>
                <div className="hero-right">
                    <img src={home} alt="" />
                </div>
            </div>
       
    )
}

export default Hero