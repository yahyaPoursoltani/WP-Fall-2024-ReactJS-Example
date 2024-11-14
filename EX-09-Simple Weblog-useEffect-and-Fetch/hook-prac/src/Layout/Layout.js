import React,{useState,useEffect} from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BlogPost from './components/BlogPost/BlogPost';
import './Layout.css';
import Home from './components/Views/Home/Home';
import About from './components/About/About';

const Layout = () => {
   

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home/>
      <Footer />
    </div>
  );
}

export default Layout;