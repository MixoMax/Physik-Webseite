import React from 'react'
import './css/header.css'

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [lastScrollPosition, setLastScrollPosition] = React.useState(0);
  const [lastScrollDirection, setLastScrollDirection] = React.useState("up");
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollDirection = window.scrollY < lastScrollPosition ? "up" : "down";
      if (scrollDirection === "up") {
          document.getElementById("wrapper").style.position = "sticky";
          document.getElementById("wrapper").style.top = "0px";
      }
      
      if (scrollDirection === "down" && window.scrollY > document.getElementById("wrapper").offsetHeight * 1.2) {
          document.getElementById("wrapper").style.top = "-100px";
      }

      if (window.scrollY === 0) {
          document.getElementById("wrapper").style.position = "static";
      }

      setLastScrollPosition(window.scrollY);
      setLastScrollDirection(scrollDirection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition, lastScrollDirection]);

  const logo_path = require("../assets/images/planetariumicons/logoplanetariumweiß_outline.png");

  return (
    <div class="wrapper">
      <img id="logo" src={logo_path} alt="Logo"></img>
      <div class="page-button-wrapper">
        <Link className="page-button" to="/">Home</Link>
        <Link className="page-button" to="/events">Events</Link>
        <Link className="page-button" to="/history">History</Link>
        <Link className="page-button" to="/about">About</Link>
        <Link className="page-button" to="/weltall">Weltall</Link>
      </div>
    </div>
  );
}

export default Header;