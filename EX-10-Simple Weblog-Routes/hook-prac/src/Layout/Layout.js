import React,{useState,useEffect} from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BlogPost from './components/BlogPost/BlogPost';
import './Layout.css';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const Layout = () => {

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Layout;