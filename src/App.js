// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Shopcategory from './components/pages/Shopcategory.jsx';
import Loginsignup from './components/pages/Loginsignup';
import Cart from './components/pages/Cart.jsx';
import Shop from './components/pages/shop.jsx';
// import Footer from './components/footer/Footer.jsx';
// import pic1 from '../Assets/pic1.png'
// import women from './components/Assets/women.png'
// import mens from './components/Assets/mens.png'
// import Kids from './components/pages/kids.jsx'
import Footer from './components/footer/Footer.jsx';
import Shopcategory from './components/pages/Shopcategory.jsx';
// import Men from './components/pages/men.jsx';
// import Women from './components/pages/Women.jsx';
// import Navbar from './components/item/Navbar/Navbar';
// import Product from './components/pages/Product.jsx';
import Product from './components/pages/Product.jsx';






function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route  path='/men' element={< Shopcategory category="men"/>} />
          <Route path='/women' element={< Shopcategory category="women" />} />
          <Route path='/kids' element={<Shopcategory category="kids" />} />

          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/Cart' element={<Cart />} />
          <Route path='/login' element={<Loginsignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
