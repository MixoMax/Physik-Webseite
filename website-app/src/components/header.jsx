import React from 'react'
import './css/header.css'

function Header() {
  return (
    <header id="wrapper">
      <h1>Planetarium Hamburg</h1>
      <div id="page-button-wrapper">
        <button class="page-button">Home</button>
        <button class="page-button">Events</button>
        <button class="page-button">History</button>
        <button class="page-button">Alte Irgendwas</button>
        <button class="page-button">Weltall</button>
      </div>
    </header>
  )
}

export default Header