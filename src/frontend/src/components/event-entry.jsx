import React from 'react'
import './css/event-entry.css'

function EventEntry({ event }) {
  // shorten description to X characters
  var max_description_length = 300;
  if (event.description.length > max_description_length) {
    var word_array = event.description.split(" ");
    var new_description = "";
    var i = 0;
    while (new_description.length < max_description_length) {
      new_description += word_array[i] + " ";
      i++;
    }
    event.description = new_description + "...";

  }

  return (
    <div id="event-component-wrapper" class="hbox">

      <img className="event-image" src={event.img_url} alt="event"/>
      
      <div id="event-info" className="hbox-grid">
        <div id="left-border"></div>
        <h2>{event.title}</h2>
        <p id="event-description">{event.description}</p>
        
        <div id="event-location-date" class="vbox">
          <p>{event.date}</p>
          <p>Ort: {event.location}</p>
          <p>Empfohlenes Alter: {event.recommended_age}+</p>
        
        </div>

        <div id="event-price" class="vbox">
          <p>Normal: {event.price_normal}€</p>
          <p>Ermäßigt: {event.price_reduced}€</p>
          <button id="event-button">Tickets</button>
        </div>

      </div>
    </div>
  )
}

export default EventEntry