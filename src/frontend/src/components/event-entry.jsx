import React from 'react'
import './css/event-entry.css'

function EventEntry({ event }) {
  return (
    <div>
      <div id="event-component-wrapper">
        <img id="event-image" src={event.img ? event.img : "https://m.media-amazon.com/images/I/81Bd9H3HP1L._AC_UF894,1000_QL80_.jpg"} alt="placeholder" />
        <p>{event.title}</p>
      </div>
    </div>
  )
}

export default EventEntry