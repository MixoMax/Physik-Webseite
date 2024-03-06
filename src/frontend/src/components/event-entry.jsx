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

  const random_number = event.title.length % 5

  const prices = ["10", "12", "15", "13.5", "8"]
  const red_prices = ["6", "7", "10", "9", "5"]

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
          <p>Normal: {prices[random_number]}€</p>
          <p>Ermäßigt: {red_prices[random_number]}€</p>
          <button id="event-button">Tickets</button>
        </div>

      </div>
    </div>
  )
}

export default EventEntry
