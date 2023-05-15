import React from 'react'
import image from "../assets/nba-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <img className='logo-nba' src={image} alt="####"  />
        </div>
        <h1>NBA Legends</h1>
    </div>
  )
}

export default Header