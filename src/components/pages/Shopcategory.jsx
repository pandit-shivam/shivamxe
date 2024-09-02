import React, { useContext } from 'react';
import './css/Shopcat.css';
import Item from '../item/item';
import { Shopcon } from '../context/Shopcon';

const Shopcategory = (props) => {
  const { data_product3 } = useContext(Shopcon);

  return (
    <div className='shop-category'>
      <div className='shop-categoryproduct'>
        {data_product3.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.Image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Shopcategory;
