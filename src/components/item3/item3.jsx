import React from 'react';
import './item3.css';

const Item3 = (props) => {
  return (
    <div>
        <div className='item1'>
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
    </div>
  );
}

export default Item3;
