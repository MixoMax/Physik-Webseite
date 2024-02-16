import React from 'react'
import './css/events.css'

import EventEntry from '../components/event-entry'

function Events() {
    const events = [
        { title: "Event 1", date: "01.01.2021", location: "Location 1" },
        { title: "Event 2", date: "02.02.2022", location: "Location 2" },
        { title: "Event 3", date: "03.03.2023", location: "Location 3" }
    ]
    

  return (
    <div>
        <p1>Wir sind die besten</p1>
        <div id="event-list">
            {events.map((event) => <EventEntry event={event} />)}
        </div>
    </div>
  )
}

export default Events