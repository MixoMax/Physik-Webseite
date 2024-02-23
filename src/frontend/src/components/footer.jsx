import React from 'react'
import './css/footer.css'

import youtube from "../assets/images/Socialmedias/YouTube_full-color_icon_\(2017\).svg.png"
import instagram from "../assets/images/Socialmedias/Instagram_logo.webp";
import facebook from "../assets/images/Socialmedias/Facebook_icon.svg.png";

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="wrapper">
      <div className="social-media-wrapper">
        <div className="planet">
          <a className="social-link" href="https://www.youtube.com/user/PlanetariumHamburg">
            <img className="logo" src={youtube} alt="YouTube"></img>
          </a>
        </div>
        <div className="planet">
          <a className="social-link" href="https://www.facebook.com/planetarium/">
            <img className="logo" src={facebook} alt="Facebook"></img>
          </a>
        </div>
        <div className="planet">
          <a className="social-link" href="https://www.instagram.com/planetariumhamburg/">
            <img className="logo" src={instagram} alt="YouTube"></img>
          </a>
        </div>
      </div>
      <h1 className="follow">Follow Us!</h1>
      <div id="footer-button-wrapper">
        <Link className="footer-button" to="/impressum">Impressum</Link>
        <Link className="footer-button" to="/contact">Contact us</Link>
        <Link className="footer-button" to="/info">Info</Link>
      </div>
    </div>
  )
}

export default Footer