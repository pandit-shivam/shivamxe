import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Pop/Popular';
import Ofr from '../Offfer/Ofr';
import Newnew from '../collection/Newnew';
import Newlatter from '../newltr/Newlatter';
// import Footer from '../footer/Footer';



const shop = () => {
  return (
    <div>
      <Hero />
      <Popular/>
      <Ofr/>
      <Newnew/>
      <Newlatter/>
      {/* <Footer/> */}
      
    </div>
  );
};

export default shop;
