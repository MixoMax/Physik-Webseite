import React from 'react'
import './css/footer.css'

import youtube from "../assets/images/Socialmedias/YouTube_full-color_icon_(2017).svg.png"
import instagram from "../assets/images/Socialmedias/Instagram_logo.webp";
import facebook from "../assets/images/Socialmedias/Facebook_icon.svg.png";
import line from "../assets/images/comp/line.png";

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
            <div className='footer-button geo'>53° 35' 50'' N // 10° 0' 33" O</div>
            <div className="footer-button footer-button-long">☎ +49 (40) 428 86 52 - 10</div>
          </div>
        </div>
      </div>
      <div class="zb-i">
        <div class="zb-nmg-wrapper row zm-fl">
          <div class="zb-ce zb-ce-text  ce-text     ">
            <p><em>Das Planetarium Hamburg ist Landesbetrieb der <a href="http://www.hamburg.de/" target="_blank">Freien und Hansestadt Hamburg</a>.<br/></em></p>
            <p>Weitere Informationen finden Sie unter <a href="http://www.hamburg.de/planetarium" target="_blank">www.hamburg.de/planetarium</a>.</p>
          </div>
          <div class="zb-ce zb-ce-text  ce-image     ">
            <figure class="obj-image ">
              <div class="zb-i">
                <img src="files/default/img/hamburg--logo.png" class="img-responsive  zm-lazy" data-img-src-xxlg="files/default/img/hamburg--logo.png"/>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer