// Product.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Shopcon } from '../context/Shopcon';
import Breadcrum from '../Breadcrum/Breadcrum.jsx';
import Productdisplay from '../productdisplay/Productdisplay.jsx';
import Discriptionbox from '../Discriptionbox/Discriptionbox.jsx';

const Product = () => {
  const { data_product3 } = useContext(Shopcon);
  const { productId } = useParams();
  const product = data_product3.find((e) => e.id === Number(productId));
  
  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product} />
      <Discriptionbox/>
    </div>
  );
}

export default Product;
