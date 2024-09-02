import React, { useContext } from 'react';
import './Cartitem.css';
import { Shopcon } from '../context/Shopcon';
import cross from '../Assets/cross.png'

const Cartitem = () => {
    const { getTotalCartAmount,data_product3, cartItem, removefromCart } = useContext(Shopcon);

    return (
        <div className='cartitem'>
            <div  className="cartitem-para">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div className="cartitem-formate-main">
                <hr />
                {data_product3.map((e) => {
                    if (cartItem[e.id] > 0) {
                        return (
                            <div key={e.id}>
                                <div className="cartitem-formate  ">

                                    <div className="cartitem-allproduct">
                                        <img src={e.Image} alt="" className='cartion-product-icon' />
                                        {/* <div className='middleitem'> */}
                                        <p className='nameiamge'>{e.name}</p>
                                        <p>${e.new_price}</p>
                                        <button className='cartitem-quality'>{cartItem[e.id]}</button>
                                        <p>${e.new_price * cartItem[e.id]}</p>
                                        <img className='cartitem-quality'src={cross} alt="Remove" onClick={() => removefromCart(e.id)} />
                                        {/* </div> */}
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        );
                    }
                    return null; // Ensure a consistent return value for map function
                })}
            </div>

            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitem-total-item">
                            <p>subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">

                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If you have promo code, Enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cartitem;
