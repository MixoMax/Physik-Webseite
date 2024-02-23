import React from 'react'
import './css/events.css'
import { useEffect } from 'react'

import EventEntry from '../components/event-entry'

function Events() {


    const events = [];
    for (let i = 0; i < 100; i++) {
        events.push({ title: "Event " + i, date: "01.01.1970", location: "Location 1", description: "This is a Placeholder text This is a Placeholder tex"});
    }

    return (
        <div>
            <div id="events-wrapper">
                {events.map((event, index) => (
                    <EventEntry key={index} event={event} />
                ))}
            </div>
        </div>
    )
}

export default Events