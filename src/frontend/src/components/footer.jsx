import React from 'react'
import './css/footer.css'

import youtube from "../assets/images/Socialmedias/YouTube_full-color_icon_(2017).svg.png"
import instagram from "../assets/images/Socialmedias/Instagram_logo.webp";
import facebook from "../assets/images/Socialmedias/Facebook_icon.svg.webp";
import line from "../assets/images/comp/line.png";
import hamburg_logo from "../assets/images/comp/hamburg-logo.png";

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-wrapper">
      <hr className='footer-line'/>
      <div className="social-media-wrapper">
        <div className="planet">
          <a className="social-link" href="https://www.youtube.com/user/PlanetariumHamburg">
            <img className="social-logo" src={youtube} alt="YouTube"></img>
          </a>
        </div>
        <div className="planet">
          <a className="social-link" href="https://www.facebook.com/planetarium/">
            <img className="social-logo" src={facebook} alt="Facebook"></img>
          </a>
        </div>
        <div className="planet">
          <a className="social-link" href="https://www.instagram.com/planetariumhamburg/">
            <img className="social-logo" src={instagram} alt="YouTube"></img>
          </a>
        </div>
      </div>
      <h1 className="follow">follow us!</h1>
      <div className="footer-moon">
        <div className="footer-button-wrapper">
          <div>
            <Link className="footer-button" to="/impressum">Impressum</Link>
            <Link className="footer-button" to="/hausordnung">Hausordnung</Link>
            <Link className="footer-button" to="/info">Info</Link>
            <Link className="footer-button" to="/agb">AGB</Link>
            <Link className="footer-button" to="/dataprotection">Dataprotection</Link>
          </div>
          <div className="footer-button address"><strong>Planetarium Hamburg</strong> // Linnering 1 (Stadtpark) // 22299 Hamburg // Deutschland</div>
          <div className="long-geo-wrapper">
            <div className='footer-button geo'>53° 35' 50" N // 10° 0' 33" O</div>
            <div className="footer-button footer-button-long">☎ +49 (40) 428 86 52 - 10</div>
          </div>
        </div>
      </div>
      <div class="footer-hamburg">
        <span className='yellow-thing'></span>
        <div className='footer-hamburg-wrapper'>
          <div class="footer-hamburg-text">
            <h3><b>Das Planetarium Hamburg ist Landesbetrieb der <a href="http://www.hamburg.de/" target="_blank">Freien und Hansestadt Hamburg</a>.<br/></b></h3>
            <p>Weitere Informationen finden Sie unter <a href="http://www.hamburg.de/planetarium" target="_blank">www.hamburg.de/planetarium</a>.</p>
          </div>
          <div class="footer-hamburg-image">
            <img src={hamburg_logo} class="hamburg-logo"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer
