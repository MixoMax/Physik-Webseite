import React, { useEffect } from 'react'
import './css/header.css'

import logo from '../assets/images/planetariumicons/logoplanetariumweiß_outline.png';
import user_icon from '../assets/images/comp/user-icon.png';
import ufo from '../assets/images/comp/user-icon.png';

import {Link, NavLink, useLocation} from 'react-router-dom';

function Header() {
  
  const [lastScrollPosition, setLastScrollPosition] = React.useState(0);
  const [lastScrollDirection, setLastScrollDirection] = React.useState("up");

  /* let location = useLocation();

  React.useEffect(() => {
    const ufo = document.getElementById('ufo');
    switch (location.pathname) {
      case '/':
        ufo.style.left = "256px";
        ufo.style.backgroundColor = "red";
        break;
      case '/events':
        ufo.style.backgroundColor = "blue";
        break;
      case '/history':
        ufo.style.backgroundColor = "green";
        break;
      case '/about':
        ufo.style.backgroundColor = "yellow";
        break;
      case '/weltall':
        ufo.style.backgroundColor = "purple";
        break;
      default:
        ufo.style.backgroundColor = "white";
        break;
    }
  }, [location]); */

  useEffect(() => {
    const bar = document.getElementById("wrapper-wrapper");

    const handleScroll = () => {
      const scrollDirection = window.scrollY < lastScrollPosition ? "up" : "down";
      if (scrollDirection === "up") {
        bar.style.position = "sticky";
        bar.style.top = "0px";
      }
      
      if (scrollDirection === "down" && window.scrollY > bar.offsetHeight * 1.2) {
        bar.style.top = -bar.offsetHeight + "px";
      }

      if (window.scrollY === 0) {
          bar.style.position = "static";
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
    <div id="wrapper-wrapper">
      <div className="wrapper">
        <div className="left-stuff">
          <img className="logo" src={logo} alt="logo"></img>
          <div className="page-button-wrapper">
            <NavLink className="page-button" activeClassName="active" to="/">Home</NavLink>
            <NavLink className="page-button" activeClassName="active" to="/space">Space</NavLink>
            <NavLink className="page-button" activeClassName="active" to="/events">Events</NavLink>
            <NavLink className="page-button" activeClassName="active" to="/history">History</NavLink>
            <NavLink className="page-button" activeClassName="active" to="/about">About</NavLink>
          </div>
        </div>
        <div className="user-actions">
          <Link className="login-btn" to="/login">Login</Link>
          <Link className="signup-btn" to="/sign-up">Sign Up</Link>
          <img className="account-icon" src={user_icon} alt="account"></img>
        </div>
      </div>
      <div class="down"></div>
    </div>
  );
}

export default Header;