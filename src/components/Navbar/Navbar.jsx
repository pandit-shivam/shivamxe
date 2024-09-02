import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import pic1 from '../Assets/pic1.png'
import pic3 from '../Assets/pic3.gif'
import { Link } from 'react-router-dom'
import { Shopcon } from '../context/Shopcon'
import dropdown from '../Assets/dropdown.png'


const Navbar = () => {

  const [menu,setMenu]=useState("shop")
  const {getTotalCartItem} = useContext(Shopcon)
  const menuRef = useRef()


  const dropdown_toggle= (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={pic3} alt="" />
        <p>SHOPPER</p>
      </div>
      <img onClick={dropdown_toggle} src={dropdown} alt="" className='dropdown' />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/'>Profile</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link to='/women'>Property</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link to='/men'>Home-purchase</Link>{menu==="men"?<hr/>:<></>}</li>
        {/* <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>K</Link>{menu==="kids"? <hr/>:<></>}</li> */}
      </ul>
      <div className='nav-logo-cart'> 
        <Link to='Login'><button>Login</button></Link>
        <Link to='/cart'><img src={pic1} alt="" /></Link>
        <div className='nav-cart-count'>{getTotalCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar;