import React from 'react'
import './css/event-entry.css'

function EventEntry({ event }) {
  return (
    <div>
      <div id="event-component-wrapper">
        <img id="event-image" src={event.img ? event.img : "https://m.media-amazon.com/images/I/81Bd9H3HP1L._AC_UF894,1000_QL80_.jpg"} alt="placeholder" />
        <p id="event-title">{event.title}</p>
        <p id="event-description">{event.description}</p>
        <p id="event-date">{event.date}</p>
        <button id="buy-ticket"><img alt="" id="ticket-icon" src='https://cdn-icons-png.flaticon.com/512/785/785581.png'/><p1 id="buy-text">Ticket Kaufen</p1></button>
      </div>
    </div>
  )
}

export default EventEntry