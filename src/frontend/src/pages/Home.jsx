import React from 'react'
import './css/home.css'

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="header-image">
        <h1 className="headline">Das Planetarium Hamburg</h1>
        <p className="header-text">Ein kurzer Text über unser Unternehmen.</p>
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
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </div>
  );
};

export default Homepage;
