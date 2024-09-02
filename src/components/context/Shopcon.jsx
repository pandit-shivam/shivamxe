// import { createContext } from "react";
import React, {createContext, useState} from "react";
import data_product3 from "../Assets/data3";

export const Shopcon = createContext(null);



const getdefaultcart = () =>{
    let cart={};
    for (let index = 0; index < data_product3.length+1; index++) {
        cart[index]=0
    }
    return cart;
}



const ShopcontextProvider = (props) =>{

    const[cartItem,setCartItem]=useState(getdefaultcart());
    // const contextValue ={}
    

    // console.log(cartItem)

     const addToCart =(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        // console.log(cartItem);
     }
     const removefromCart =(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
     }

     const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = data_product3.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItem[item];
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItem = () =>{
        let totalItem = 0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                totalItem += cartItem[item]
            }
        }
        return totalItem
    }
    
    
     const contextValue = {getTotalCartItem,getTotalCartAmount,data_product3,cartItem,addToCart,removefromCart};
    return(
        <Shopcon.Provider value={contextValue}>
            {props.children}
        </Shopcon.Provider>
    )
}
export default ShopcontextProvider;