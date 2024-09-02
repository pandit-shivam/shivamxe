
// Productdisplay.jsx
import React from 'react';
import './productdisplay.css'
import { useContext } from 'react';
import { Shopcon } from '../context/Shopcon';

const Productdisplay = ({ product }) => {
    const {addToCart} = useContext(Shopcon)
    // console.log(addtoCart)
    return (
        <div>
            <div className="productdisplay">
                <div className="displayproduct-left">
                    <div className="productdisplay-img-list">
                        {/* <h2>{product.name}</h2> */}
                        <img src={product.Image} alt={product.name} />
                        <img src={product.Image} alt={product.name} />
                        <img src={product.Image} alt={product.name} />
                        <img src={product.Image} alt={product.name} />
                        <p>{product.description}</p>
                    </div>
                    <div className="poductdip">
                        <img className='productdisplay-main-img' src={product.Image} alt="" />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="productdisplay-star">
                       <img src="" alt="" /> 
                       <img src="" alt="" /> 
                       <img src="" alt="" /> 
                       <img src="" alt="" /> 
                       <p>(122)</p>
                    </div>
                    <div className="productdisplay-right-price">
                        <div className="productdisplay-right-price-old">${product.old_price}</div>
                        <div className="productdisplay-right-price-new">${product.new_price}</div>
                    </div>
                    <div className="productdisplay-right-description">
                        A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline  and short  sleeves, worn as and undershirt  or outer garment
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>select size</h1>
                        <div className="productdipslay-right-size">
                            <div>S</div>
                            <div>L</div>
                            <div>M</div>
                            <div>XL</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                    <p className="productdisplay-right-category"><span>Category :</span>Women, T-shirt, Crop-top</p>
                    <p className="productdisplay-right-category"><span> Tags :</span>Modern, Latest </p>
                </div>
            </div>
        </div>
    );
}

export default Productdisplay;
