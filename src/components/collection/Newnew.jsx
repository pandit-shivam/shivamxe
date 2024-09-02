import React from 'react'
import './Newnew1.css'
import data_product2 from '../Assets/data2'
// import New_collection from '../Assets/New_collection'
import Item2 from '../item2/Item2'
const Newnew = () => {
  return (
    <div className="popular">
        <h1>COMMING SOON</h1>
        <hr/>
        <div className="popular-item">
           {data_product2.map((item,i)=>{
                return <Item2  key={i} id={item.id} name={item.name} image={item.Image} new_price={item.new_price} old_price={item.old_price} />
           })}
        </div>
    </div>
  )
}

export default Newnew