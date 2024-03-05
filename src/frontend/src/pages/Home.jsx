import React, { useEffect, useState } from 'react'
import './css/home.css'

import arrow_left from '../assets/images/comp/arrow_left.png'
import arrow_right from '../assets/images/comp/arrow_right.png'

import cloud1 from '../assets/images/clouds/cloud_1.png';
import cloud2 from '../assets/images/clouds/cloud_2.png';
import cloud3 from '../assets/images/clouds/cloud_3.png';
import cloud4 from '../assets/images/clouds/cloud_4.png';
import cloud5 from '../assets/images/clouds/cloud_5.png';

import earth from '../assets/images/planets/earth.svg';
import uranus from '../assets/images/planets/uranus.svg';

import card_1 from '../assets/images/comp/card_1.webp';
import card_2 from '../assets/images/comp/card_2.webp';

const Homepage = () => {

  const backgroundImages = [
    require("../assets/images/Planetarium_irl/planetarium_nacht.png.jpg"),
    require("../assets/images/Planetarium_irl/planetarium-bild.jpg")
  ]

  const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0]);

  useEffect(() => {
    let textNumber = 1;
    let manualButtonClick = false;
    const text1_html = document.getElementsByClassName('homepage-text-1')[0];
    const text2_html = document.getElementsByClassName('homepage-text-2')[0];
    const text3_html = document.getElementsByClassName('homepage-text-3')[0];
    const buttonLeft_html = document.getElementsByClassName('homepage-button-left')[0];
    const buttonRight_html = document.getElementsByClassName('homepage-button-right')[0];
    const backgroundImage_html = document.getElementsByClassName("header-image")[0]
    const header_html = document.getElementById("wrapper-wrapper")
    const headerwrapper_html = document.getElementsByClassName("header-wrapper")[0]

    backgroundImage_html.style.height = `calc(100vh - ${header_html.offsetHeight}px)`
    headerwrapper_html.style.height = `calc(90vh - ${header_html.offsetHeight}px - 10%)`

    const buttonLeftClick = () => {
      manualButtonClick = true;
      if(textNumber === 1) {
        textNumber = 3;
      }
      else {
        textNumber = textNumber - 1;
      }
      switch(textNumber) {
        case 1:
          text1_html.style.opacity = 1;
          text2_html.style.opacity = 0;
          text1_html.style.left = "15%";
          text2_html.style.left = "115%";
          text3_html.style.left = "-85%";
          setBackgroundImage(backgroundImages[0]);
          break;
        case 2:
          text2_html.style.opacity = 1;
          text3_html.style.opacity = 0;
          text2_html.style.left = "15%";
          text3_html.style.left = "115%";
          text1_html.style.left = "-85%";
          setBackgroundImage(backgroundImages[0]);
          break;
        case 3:
          text3_html.style.opacity = 1;
          text1_html.style.opacity = 0;
          text3_html.style.left = "15%";
          text1_html.style.left = "115%";
          text2_html.style.left = "-95%";
          setBackgroundImage(backgroundImages[0]);
          break;
        default:
          break;
      }
    }

    const buttonRightClick = () => {
      manualButtonClick = true;
      if(textNumber === 3) {
        textNumber = 1;
      }
      else {
        textNumber = textNumber + 1;
      }
      switch(textNumber) {
        case 1:
          text1_html.style.opacity = 1;
          text3_html.style.opacity = 0;
          text1_html.style.left = "15%";
          text2_html.style.left = "115%";
          text3_html.style.left = "-85%";
          setBackgroundImage(backgroundImages[0]);
          break;
        case 2:
          text2_html.style.opacity = 1;
          text1_html.style.opacity = 0;
          text2_html.style.left = "15%";
          text3_html.style.left = "115%";
          text1_html.style.left = "-85%";
          setBackgroundImage(backgroundImages[0]);
          break;
        case 3:
          text3_html.style.opacity = 1;
          text2_html.style.opacity = 0;
          text3_html.style.left = "15%";
          text1_html.style.left = "115%";
          text2_html.style.left = "-85%";
          setBackgroundImage(backgroundImages[0]);
          break;
        default:
          break;
      }
    }

    const autoRightClick = () => {
      if(textNumber === 3) {
        textNumber = 1;
      }
      else {
        textNumber = textNumber + 1;
      }
      switch(textNumber) {
        case 1:
          text1_html.style.opacity = 1;
          text3_html.style.opacity = 0;
          text1_html.style.left = "15%";
          text2_html.style.left = "115%";
          text3_html.style.left = "-85%";
          setBackgroundImage(backgroundImages[0]);
          break;
        case 2:
          text2_html.style.opacity = 1;
          text1_html.style.opacity = 0;
          text2_html.style.left = "15%";
          text3_html.style.left = "115%";
          text1_html.style.left = "-85%";
          setBackgroundImage(backgroundImages[0]);
          break;
        case 3:
          text3_html.style.opacity = 1;
          text2_html.style.opacity = 0;
          text3_html.style.left = "15%";
          text1_html.style.left = "115%";
          text2_html.style.left = "-85%";
          setBackgroundImage(backgroundImages[0]);
          break;
        default:
          break;
      }
    }
    
    setInterval(() => {
      if (manualButtonClick) {
        console.log("Manual button click detected, skipping auto click");
        manualButtonClick = false;
      } else {
        console.log("Auto click");
        autoRightClick();
      }
    }, 5000)

    buttonLeft_html.addEventListener('click', buttonLeftClick);
    buttonRight_html.addEventListener('click', buttonRightClick);
    
    return () => {
      buttonLeft_html.removeEventListener('click', buttonLeftClick);
      buttonRight_html.removeEventListener('click', buttonRightClick);
    };

  }, []);

  return (
    <div className="homepage">
      <div className="header-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
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

      <img className="home-earth" src={earth} alt="Earth" />
      <img className="home-uranus" src={uranus} alt="Uranus" />

      <div className="opening-hours">
        <div class="time-table">
          <div class="time-table-inner">
            <section class="öffnungszeiten">
              <div class="zb-i  ">
                <div class="zb-nmg-wrapper row zm-fl">
                  <div itemscope="" itemtype="http://schema.org/LocalBusiness" class="zb-ce zb-ce-text  ce-location-widget-opening-times list-style-default   column ">
                    <h2>Öffnungszeiten des Planetariums</h2>
                    <hr />
                    <dl>
                      <dt>Montag</dt>
                      <dd itemprop="openingHours" content="We 09:00-17:00">
                        <span>geschlossen </span>
                      </dd>
                    </dl>
                    <hr />
                    <dl>
                      <dt>Dienstag</dt>
                      <dd itemprop="openingHours" content="We 09:00-17:00">
                        <span>09:00 </span>
                        <span class="opening-times-sperator">-</span>
                        <span>19:00 </span>
                      </dd>
                    </dl>
                    <hr />
                    <dl>
                      <dt>Mittwoch</dt>
                      <dd itemprop="openingHours" content="We 09:00-17:00">
                        <span>09:00 </span>
                        <span class="opening-times-sperator">-</span>
                        <span>17:00 </span>
                      </dd>
                    </dl>
                    <hr />
                    <dl>
                      <dt>Donnerstag - Freitag</dt>
                      <dd itemprop="openingHours" content="Th,Fr 09:00-21:00">
                        <span>09:00 </span>
                        <span class="opening-times-sperator">-</span>
                        <span>21:00 </span>
                      </dd>
                    </dl>
                    <hr />
                    <dl>
                      <dt>Samstag</dt>
                      <dd itemprop="openingHours" content="Sa 12:00-22:30">
                        <span>12:00 </span>
                        <span class="opening-times-sperator">-</span>
                        <span>22:30 </span>
                      </dd>
                    </dl>
                    <hr />
                    <dl>
                      <dt>Sonn- und Feiertage</dt>
                      <dd itemprop="openingHours" content="Su 10:00-19:00">
                        <span>10:00 </span>
                        <span class="opening-times-sperator">-</span>
                        <span>19:00 </span>
                      </dd>
                    </dl>
                    <hr />
                  </div>
                </div>
              </div>
            </section>
            <div class="service">
              <h2 class="h2">Service</h2>
              <hr className="fixed-line"/>
              <ul class="list-unstyled">
                <li>
                  <a href="https://www.planetarium-hamburg.de/de/presse" class="">
                    <span>Presse</span>
                  </a>
                </li>
                <hr />
                <li>
                  <a href="https://www.planetarium-hamburg.de/de/distribution/deutsch" class="">
                    <span>Distribution</span>
                  </a>
                </li>
                <hr />
                <li>
                  <a href="https://www.planetarium-hamburg.dede/newsletter" class="">
                    <span>Newsletter</span>
                  </a>
                </li>
                <hr />
                <li>
                  <a target="_blank" href="https://planetarium-hamburg.eventim-inhouse.de/webshop/webticket/coupon" class="">
                    <span>Gutscheinshop</span>
                  </a>
                </li>
                <hr />
                <li>
                  <a href="https://www.planetarium-hamburg.dede/besuchsinformationen#faq" class="">
                    <span>Häufige Fragen</span>
                  </a>
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className='history-line'/>  

      <div className="cards">
        <div className="card">
          <img className="card-img" src={card_1} alt="card-img" />
          <h1 className='card-title'>Die nächsten Veranstaltungen</h1>
          <hr></hr>
          <p>Erleben Sie im Planetarium Hamburg eine faszinierende Reise zurück in die Vergangenheit, zu den Anfängen unseres Sonnensystems und entdecken Sie die unglaubliche Entstehungsgeschichte unseres Sonnensystems</p>
          <p>Aktuell: Erstmals in der Geschichte der Raumfahrt ist einer kommerziellen Mission die Landung auf dem Mond geglückt. Der Lander «Nova-C» des US-Unternehmens Intuitive Machines setzte in der Nacht in der südlichen Region des Erdtrabanten auf, wie die US-Raumfahrtbehörde Nasa mitteilte. Es ist die erste - wenn auch unbemannte - US-Mondlandung seit den legendären Apollo-Missionen vor mehr als 50 Jahren.</p>
          <a href="#/events" type="button">WEITERLESEN</a>
        </div>
        <div className="card">
          <img className="card-img" src={card_2} alt="card-img" />
          <h1 className='card-title'>Horoskop</h1>
          <hr></hr>
          <p>Entdecke, was die Sterne für dich bereithalten! Finde heraus, welche Geheimnisse in deinem Sternzeichen stecken und erhalte wertvolle Einblicke in deine Persönlichkeit, Liebe, Karriere und vieles mehr! Welche Charaktereigenschaften besitzt du? Wie solltest du das Leben leben?</p>
          <p>Egal ob du neugierig bist oder du mehr über deine astrologischen Eigenschaften erfahren möchtest. Das wöchentlich aktualisierte Horoskop unserer Sternenleser hält vielleicht eine Antwort für dich bereit!<br />Wage einen Blick in deine kosmische Zukunft und finde dich selbst mit unserem </p>
          <a href="#/horoskop" type="button">HOROSKOP</a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
