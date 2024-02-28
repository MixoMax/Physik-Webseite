import React from 'react'
import './css/events.css'
import { useEffect } from 'react'

import EventEntry from '../components/event-entry'

function Events() {

    const events = [];
    events.push({ title: "", date: "xx.yy.zzzz", location: "_", description: "This is a Placeholder text This is a Placeholder tex"});
    events.push({ title: "", date: "xx.yy.zzzz", location: "_", description: "This is a Placeholder text This is a Placeholder tex"});
    events.push({ title: "", date: "xx.yy.zzzz", location: "_", description: "This is a Placeholder text This is a Placeholder tex"});
    events.push({ title: "", date: "xx.yy.zzzz", location: "_", description: "This is a Placeholder text This is a Placeholder tex"});
    events.push({ title: "", date: "xx.yy.zzzz", location: "_", description: "This is a Placeholder text This is a Placeholder tex"});
    events.push({ title: "", date: "xx.yy.zzzz", location: "_", description: "This is a Placeholder text This is a Placeholder tex"});
    events.push({ title: "", date: "xx.yy.zzzz", location: "_", description: "This is a Placeholder text This is a Placeholder tex"});
    events.push({ title: "", date: "xx.yy.zzzz", location: "_", description: "This is a Placeholder text This is a Placeholder tex"});
    events.push({ title: "", date: "xx.yy.zzzz", location: "_", description: "This is a Placeholder text This is a Placeholder tex"});
    events.push({ title: "", date: "xx.yy.zzzz", location: "_", description: "This is a Placeholder text This is a Placeholder tex"});

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