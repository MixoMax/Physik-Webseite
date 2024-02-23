import React from 'react'
import './css/header.css'

import logo from '../assets/images/planetariumicons/logoplanetariumweiß_outline.png';
import user_icon from '../assets/images/icons/user-icon.png';
import ufo from '../assets/images/icons/user-icon.png';

import {Link} from 'react-router-dom';

function Header() {
  /*
  const [lastScrollPosition, setLastScrollPosition] = React.useState(0);
  const [lastScrollDirection, setLastScrollDirection] = React.useState("up");
  const bar = document.getElementsByClassName("wrapper")

  useEffect(() => {
    const handleScroll = () => {
      const scrollDirection = window.scrollY < lastScrollPosition ? "up" : "down";
      if (scrollDirection === "up") {
        bar.style.position = "sticky";
        bar.style.top = "0px";
      }
      
      if (scrollDirection === "down" && window.scrollY > document.getElementById("wrapper").offsetHeight * 1.2) {
        console.log(bar.style.top);
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


  const marker = document.querySelector("marker");
  const item = document.querySelectorAll("page-button");

  function indicator(e) {
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
  }

  item.forEach(link => {
    link.addEventListener('click', (e) => {
      indicator(e.traget);
    })
  })*/
        

  return (
    <div>
      <div className="wrapper">
        <div className="left-stuff">
          <img className="logo" src={logo} alt="logo"></img>
          <div className="page-button-wrapper">
            <Link className="page-button" to="/">Home</Link>
            <Link className="page-button" to="/events">Events</Link>
            <Link className="page-button" to="/history">History</Link>
            <Link className="page-button" to="/about">About</Link>
            <Link className="page-button active" to="/weltall">Weltall</Link>
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