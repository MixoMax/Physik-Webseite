import React from 'react'
import './css/footer.css'

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div id="footer-button-wrapper">
        <Link class="footer-button" to="/impressum">Impressum</Link>
        <Link class="footer-button" to="/contact">Contact us</Link>
        <Link class="footer-button" to="/info">Info</Link>
      </div>
    </div>
  )
}

export default Footer