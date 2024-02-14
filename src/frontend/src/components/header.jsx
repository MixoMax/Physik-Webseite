import React from 'react'
import './css/header.css'

import { useEffect } from 'react';

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

  return (
    <div id="wrapper">
      <h1>Planetarium Hamburg</h1>
      <div id="page-button-wrapper">
        <button className="page-button" onClick={() => window.location.href="/"}>Home</button>
        <button className="page-button" onClick={() => window.location.href="/events"}>Events</button>
        <button className="page-button" onClick={() => window.location.href="/history"}>History</button>
        <button className="page-button" onClick={() => window.location.href="/about"}>About</button>
        <button className="page-button" onClick={() => window.location.href="/weltall"}>Weltall</button>
      </div>
    </div>
  );
}

export default Header;