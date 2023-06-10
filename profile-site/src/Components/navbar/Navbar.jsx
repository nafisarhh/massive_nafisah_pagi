import React from 'react'
import "./navbar.css";

const Navbar = () => {
  return <nav>
    <div className="containerNav">
        <div className="navName">
            <span>Hi, my name is</span>
            <span>Nafisah Rahmadani</span>
        </div>
        <div className="navMenuRight">
           <a href="#home">Home</a>
           <a href="#about">About</a>
           <a href="#work">Work</a>
        </div>
        <div className="navMenuBott">
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </div>
    </div>
    </nav>
  
}

export default Navbar;