import React, { useState } from 'react';
import './navbar.css'; // You can define your CSS styles here

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="topnav" id="myTopnav">
      <a href="/home" className="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </a>
      {isMenuOpen && (
        <div className="responsive-links">
          <a href="#home" className="active">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
