import React from 'react'
import './css/home.css'

import cloud1 from '../assets/images/clouds/cloud_1.png';
import cloud2 from '../assets/images/clouds/cloud_2.png';
import cloud3 from '../assets/images/clouds/cloud_3.png';
import cloud4 from '../assets/images/clouds/cloud_4.png';
import cloud5 from '../assets/images/clouds/cloud_5.png';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="header-image">
        <div className="header-wrapper">
          <h1 className="headline">Das Planetarium Hamburg</h1>
          <p className="header-text">Willkommen im Planetarium Hamburg!</p>
          <p className="header-text">Tauchen Sie ein in die faszinierende Welt des Universums und erleben Sie unvergessliche Sternenabenteuer im Herzen der Hansestadt durch den beeindruckenden Kuppelsaal. Atemberaubende 360-Grad-Projektionen nehmen Sie mit auf eine Reise durch Raum und Zeit. Das Planetarium Hamburg, eines der größten und modernsten Planetarien Europas, erwartet Sie mit einem vielfältigen Programm für Groß und Klein.</p>
          <p className="header-text">Besuchen Sie das Planetarium Hamburg und erleben Sie eine Reise zu den Sternen, die Sie so schnell nicht vergessen werden. Wir freuen uns auf Ihren Besuch!</p>
        </div>
        <div className="clouds">
          <img className="cloud-1" src={cloud1} alt="cloud1"></img>
          <img className="cloud-2" src={cloud2} alt="cloud2"></img>
          <img className="cloud-3" src={cloud3} alt="cloud3"></img>
          <img className="cloud-4" src={cloud4} alt="cloud4"></img>
          <img className="cloud-5" src={cloud5} alt="cloud5"></img>
        </div>
      </div>

      <div className="opening-hours">
        <h2>Öffnungszeiten</h2>
        <table>
          {/* Hier deine Öffnungszeiten einfügen */}
        </table>
      </div>

      <div className="ticket-hotline">
        <h3>Tickethotline</h3>
        <table>
          {/* Hier deine Tickethotline-Informationen einfügen */}
        </table>
      </div>

      <div className="cards">
        <div className="card">
          {/* Inhalt der ersten Karte */}
          <p>Text für die erste Karte</p>
        </div>
        <div className="card">
          {/* Inhalt der zweiten Karte */}
          <p>Text für die zweite Karte</p>
        </div>
      </div>

      <div className="bottom-section">
        <p>Zusätzlicher Text unter den Karten</p>
        <h2>Weitere Informationen</h2>
        <a href="#" className="button-link">
          Button-Link
        </a>
      </div>

      <div className="social-media">
        {/* Hier deine Social-Media-Links einfügen */}
        <a href="https://youtube.com/kompetenzghg">Facebook</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygULbmV2ZXIgZ29ubmE%3D">Twitter</a>
        <a href="https://twitch.tv/bastighg">Instagram</a>
      </div>
    </div>
  );
};

export default Homepage;
