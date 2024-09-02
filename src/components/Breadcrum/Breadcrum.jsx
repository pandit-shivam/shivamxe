import React from 'react'
import './Breadcrum.css'

const Breadcrum = (props) => {
    const {product}=props
  return (
    
    <div className='breadcrum'>
        Home <img src="" alt="" /> Shop  <img src="" alt="" /> {product.category} <img src="" alt="" /> {product.name}
     </div>
  )
}

export default Breadcrum;