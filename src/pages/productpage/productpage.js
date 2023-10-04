// import logo from './logo.svg';
import React from 'react'
// import { Link } from 'react-router-dom'
import './productpage.css';
import Navbar from './Nav/navp';
import Sortby from './sortby';
import Producs from './productpages';
// import Products from './products/product';
// import Footer from './footer/footer';

function Productpage() {
  return (
    <div className="Productpage">
      <div className='provnav'><Navbar/></div>
      
      <div className='headd'>
        <div className='result'>
          <p>Result Found</p>
        </div>
        <div className='pray'>
          <div><p className='sort'>Sort By</p></div>
          <div className='pack'>
            <Sortby/>
          </div>
        </div>
      </div>
      <Producs/>
    </div>
  );
}

export default Productpage;
