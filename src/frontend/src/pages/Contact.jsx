import React from 'react'
import './css/contact.css'
import ContactPoster from '../components/contact-poster'

function Contact() {

  const persons = [
    { name: "Vinni Reptilien", date: "01.01.2021", description: "This is a Placeholder text This is a Placeholder texThis is a PlaceholdertexThis is a PlaceholdertexThis is a PlaceholdertexThis is a PlaceholdertexThis is a Placeholdertext" }, 
    { name: "Schwenni", date: "02.02.2022", description: "This is a Placeholder text This is a Placeholder texThis is a PlaceholdertexThis is a PlaceholdertexThis is a PlaceholdertexThis is a PlaceholdertexThis is a Placeholdertext" },
    { name: "Yannick Braune", date: "03.03.2023", description: "This is a Placeholder text This is a Placeholder text This is a PlaceholdertexThis is a PlaceholdertexThis is a PlaceholdertexThis is a PlaceholdertexThis is a Placeholdertext" }
]

  return (
    <div id="wrapper">
      {persons.map((person) => <ContactPoster person={person} />)}
    </div>
  )
}

export default Contact