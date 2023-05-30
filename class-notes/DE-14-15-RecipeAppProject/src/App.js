import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import Details from './pages/details/Details';


function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
