import React from 'react'
import './Item2.css'

const item = (props) => {
    return (
        <div className='item'>
            <img className='img1' src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-price">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default item