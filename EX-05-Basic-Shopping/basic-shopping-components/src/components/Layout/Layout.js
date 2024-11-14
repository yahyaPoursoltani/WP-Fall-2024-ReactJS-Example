import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import ProductsView from './../Views/Products/ProductsView';
import Footer from './Footer/Footer';
import './Layout.css';

function Layout() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <ProductsView/>
      <Footer />
    </div>
  );
}

export default Layout;