import React from 'react'
import './Footer.css'
// import Shopon9 from './Assets/shopon9.png'
// import shopon9 from '../Assets/shopon9.png'
import whtsp from '../Assets/whtsp.png'
import print from '../Assets/print.png'
import staaa from '../Assets/staaa.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img className='img5' src="" alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img className='img5' src={whtsp} alt="" />
            </div>
            <div className="footer-icon-container">
                <img className='img5' src={print} alt="" />
            </div>
            <div className="footer-icon-container">
                <img className='img5' src={staaa} alt="" />
            </div>
           
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 -  All right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;