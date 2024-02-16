
import './css/contact-poster.css'

function ContactPoster({ person }) {
  return (
    <div>
      <div id="event-component-wrapper">
        <img id="event-image" src={person.img ? person.img : "https://as1.ftcdn.net/v2/jpg/02/88/85/76/1000_F_288857633_LYUqDnWvCSYJnVFpDW6lRb3a5xXp8ZkK.jpg"} alt="placeholder" />
        <p id="event-title">{person.name}</p>
        <p id="event-description">{person.description}</p>
        </div>
    </div>
  )
}

export default ContactPoster