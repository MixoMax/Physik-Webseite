import React from 'react'
import './css/home.css'

import arrow_left from '../assets/images/comp/arrow_left.png'
import arrow_right from '../assets/images/comp/arrow_right.png'

import cloud1 from '../assets/images/clouds/cloud_1.png';
import cloud2 from '../assets/images/clouds/cloud_2.png';
import cloud3 from '../assets/images/clouds/cloud_3.png';
import cloud4 from '../assets/images/clouds/cloud_4.png';
import cloud5 from '../assets/images/clouds/cloud_5.png';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="header-image">
        <div className="homepage-button-wrapper">
          <div className="homepage-button-left">
            <img className="homepage-button-left-img" src={arrow_left} alt="&lt;"></img>
          </div>
          <div className="homepage-button-right">
            <img className="homepage-button-right-img" src={arrow_right} alt="&rt;"></img>
          </div>
        </div>
        <div className="header-wrapper">
          <div className="homepage-text-1">
            <h1 className="headline">Das Planetarium Hamburg</h1>
            <p className="header-text">Willkommen im Planetarium Hamburg!</p>
            <p className="header-text">Tauchen Sie ein in die faszinierende Welt des Universums und erleben Sie unvergessliche Sternenabenteuer im Herzen der Hansestadt durch den beeindruckenden Kuppelsaal. Atemberaubende 360-Grad-Projektionen nehmen Sie mit auf eine Reise durch Raum und Zeit. Das Planetarium Hamburg, eines der größten und modernsten Planetarien Europas, erwartet Sie mit einem vielfältigen Programm für Groß und Klein.</p>
            <p className="header-text">Besuchen Sie das Planetarium Hamburg und erleben Sie eine Reise zu den Sternen, die Sie so schnell nicht vergessen werden. Wir freuen uns auf Ihren Besuch!</p>
          </div>
          <div className="homepage-text-2">
            <h1 className="headline">Vielfältiges Programm</h1>
            <p className="header-text">Das Planetarium Hamburg ist ein Ort für die ganze Familie. Egal ob Sie ein Sternen-Liebhaber, ein Naturwissenschafts-Enthusiast oder einfach nur neugierig sind - das Planetarium Hamburg bietet ein breites Spektrum an Veranstaltungen für alle Interessen und Altersgruppen. Von klassischen Sternenshows über interaktive Workshops oder einzigartigen Konzerten bis hin zu speziellen Programmen für Kinder ist für jeden etwas dabei.</p>
          </div>
          <div className="homepage-text-3">
            <h1 className="headline">Ort der Entspannung</h1>
            <p className="header-text">Tauchen Sie ein in die Ruhe des Kosmos und lassen Sie sich von den faszinierenden Bildern und Klängen des Universums verzaubern. Das Planetarium Hamburg ist auch ein Ort der Entspannung und des Rückzugs, an dem Sie dem Stress des Alltags entfliehen können.</p>
          </div>
        </div>
        <div className="clouds">
          <img className="cloud-1" src={cloud1} alt="cloud1"></img>
          <img className="cloud-2" src={cloud2} alt="cloud2"></img>
          <img className="cloud-3" src={cloud3} alt="cloud3"></img>
          <img className="cloud-4" src={cloud4} alt="cloud4"></img>
          <img className="cloud-5" src={cloud5} alt="cloud5"></img>
        </div>
      </div>

      <div className="opening-hours">
        <h1>Öffnungszeiten</h1>
        <table className="time-table">
          <tr>
            <th>Tag</th>
            <th>Montag</th>
            <th>Dienstag</th>
            <th>Mittwoch</th>
            <th>Donnerstag</th>
            <th>Freitag</th>
            <th>Samstag</th>
          </tr>
          <tr>
            <th>Zeiten</th>
            <th>geschlossen</th>
            <th>9:00 - 19:00 Uhr</th>
            <th>9:00 - 17:00 Uhr</th>
            <th>9:00 - 21:00 Uhr</th>
            <th>12:00 - 22:30 Uhr</th>
            <th>9:00 - 19:00 Uhr</th>
            <th>10:00 - 19:00 Uhr</th>
            <th>10:00 - 19:00 Uhr</th>
          </tr>
        </table>
      </div>

      <div className="ticket-hotline">
        <h1>Tickethotline</h1>
        <div class="zb-ce zb-ce-text  ce-linklist  linklist   column col-md-6 col-lg-4 ">
          <h4 class="h4">Service</h4><ul class="list-unstyled">
            <li>
              <a href="de/presse" class="">
                <span>Presse</span>
              </a>
            </li>
            <li>
              <a href="de/distribution/deutsch" class="">
                <span>Distribution</span>
              </a>
            </li>
            <li>
              <a href="de/newsletter" class="">
                <span>Newsletter</span>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://planetarium-hamburg.eventim-inhouse.de/webshop/webticket/coupon" class="">
                <span>Gutscheinshop</span>
              </a>
            </li>
            <li>
              <a href="de/besuchsinformationen#faq" class="">
                <span>Häufige Fragen</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <img className='card-img' src="" alt="event"></img>
          <h1 className='card-title'>Die nächsten Veranstaltungen</h1>
          <hr></hr>
          <p>Erleben Sie im Planetarium Hamburg eine faszinierende Reise zurück in die Vergangenheit, zu den Anfängen unseres Sonnensystems und entdecken Sie die unglaubliche Entstehungsgeschichte unseres Sonnensystems</p>
          <p>Aktuell: Erstmals in der Geschichte der Raumfahrt ist einer kommerziellen Mission die Landung auf dem Mond geglückt. Der Lander «Nova-C» des US-Unternehmens Intuitive Machines setzte in der Nacht in der südlichen Region des Erdtrabanten auf, wie die US-Raumfahrtbehörde Nasa mitteilte. Es ist die erste - wenn auch unbemannte - US-Mondlandung seit den legendären Apollo-Missionen vor mehr als 50 Jahren.</p>
          <button type="button">WEITERLESEN</button>
        </div>
        <div className="card">
          <img className='card-img' src="" alt="event"></img>
          <h1 className='card-title'>Horoskop</h1>
          <hr></hr>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum numquam deserunt, accusantium praesentium minima iste veniam vel beatae adipisci!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laborum tempore cum doloremque. Odit exercitationem soluta animi magnam ipsum recusandae, obcaecati laboriosam quae perferendis accusantium rerum? Quam voluptate molestias at, ad iste voluptates sequi harum ratione nam a odit? Nemo asperiores aperiam consequatur rerum a iste! Tempora aliquid officia deleniti.</p>
          <button type="button">WEITERLESEN</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
