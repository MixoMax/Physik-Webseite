import React, { useEffect, useState } from 'react'
import './css/home.css'

import arrow_left from '../assets/images/comp/arrow_left.png'
import arrow_right from '../assets/images/comp/arrow_right.png'

import cloud1 from '../assets/images/clouds/cloud_1.png';
import cloud2 from '../assets/images/clouds/cloud_2.png';
import cloud3 from '../assets/images/clouds/cloud_3.png';
import cloud4 from '../assets/images/clouds/cloud_4.png';
import cloud5 from '../assets/images/clouds/cloud_5.png';

const Homepage = () => {

  const backgroundImages = [
    require("../assets/images/Planetarium_irl/planetarium_nacht.png"),
    require("../assets/images/Planetarium_irl/planetarium-bild.jpg")
  ]

  const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0]);

  useEffect(() => {
    let textNumber = 1;
    const text1_html = document.getElementsByClassName('homepage-text-1')[0];
    const text2_html = document.getElementsByClassName('homepage-text-2')[0];
    const text3_html = document.getElementsByClassName('homepage-text-3')[0];
    const buttonLeft_html = document.getElementsByClassName('homepage-button-left')[0];
    const buttonRight_html = document.getElementsByClassName('homepage-button-right')[0];
    const backgroundImage_html = document.getElementsByClassName("header-image")[0]
    const header_html = document.getElementById("wrapper-wrapper")
    const headerwrapper_html = document.getElementsByClassName("header-wrapper")[0]

    backgroundImage_html.style.height = `calc(110vh - ${header_html.offsetHeight}px)`
    headerwrapper_html.style.height = `calc(100vh - ${header_html.offsetHeight}px - 10%)`

    const buttonLeftClick = () => {
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
          setBackgroundImage(backgroundImages[1]);
          break;
        case 2:
          text2_html.style.opacity = 1;
          text3_html.style.opacity = 0;
          text2_html.style.left = "15%";
          text3_html.style.left = "115%";
          text1_html.style.left = "-85%";
          setBackgroundImage(backgroundImages[1]);
          break;
        case 3:
          text3_html.style.opacity = 1;
          text1_html.style.opacity = 0;
          text3_html.style.left = "15%";
          text1_html.style.left = "115%";
          text2_html.style.left = "-95%";
          setBackgroundImage(backgroundImages[1]);
          break;
        default:
          break;
      }
    }

    const buttonRightClick = () => {
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

      <div className="opening-hours">
        <h1>Öffnungszeiten</h1>
        <table className="time-table">
          <tr>
            <th>Tag</th>
            <th>Zeiten</th>
          </tr>
          <tr style={{height:  "1px"}}>
            <td colspan="100%" style={{height:  "1px", borderTop:  "1px solid white"}}></td>
          </tr>
          <tr>
            <td>Montag:</td>
            <td>geschlossen</td>
          </tr>
          <tr>
            <td>Dienstag:</td>
            <td>9:00 - 19:00 Uhr</td>
          </tr>
          <tr>
            <td>Mittwoch:</td>
            <td>9:00 - 17:00 Uhr</td>
          </tr>
          <tr>
            <td>Donnerstag:</td>
            <td>9:00 - 21:00 Uhr</td>
          </tr>
          <tr>
            <td>Freitag:</td>
            <td>9:00 - 21:00 Uhr</td>
          </tr>
          <tr>
            <td>Samstag:</td>
            <td>12:00 - 22:30 Uhr</td>
          </tr>
          <tr>
            <td>Sonntag:</td>
            <td>10:00 - 19:00 Uhr</td>
          </tr>
          <tr>
            <td>Feiertage:</td>
            <td>10:00 - 19:00 Uhr</td>
          </tr>
        </table>
      </div>


      <div className="cards">
        <div className="card">
          <h1 className='card-title'>Die nächsten Veranstaltungen</h1>
          <hr></hr>
          <p>Erleben Sie im Planetarium Hamburg eine faszinierende Reise zurück in die Vergangenheit, zu den Anfängen unseres Sonnensystems und entdecken Sie die unglaubliche Entstehungsgeschichte unseres Sonnensystems</p>
          <p>Aktuell: Erstmals in der Geschichte der Raumfahrt ist einer kommerziellen Mission die Landung auf dem Mond geglückt. Der Lander «Nova-C» des US-Unternehmens Intuitive Machines setzte in der Nacht in der südlichen Region des Erdtrabanten auf, wie die US-Raumfahrtbehörde Nasa mitteilte. Es ist die erste - wenn auch unbemannte - US-Mondlandung seit den legendären Apollo-Missionen vor mehr als 50 Jahren.</p>
          <a href="#/events" type="button">WEITERLESEN</a>
        </div>
        <div className="card">
          <br></br>
          <br></br>
          <h1 className='card-title'>Horoskop</h1>
          <hr></hr>
          <p>Entdecke, was die Sterne für dich bereithalten! Finde heraus, welche Geheimnisse in deinem Sternzeichen stecken und erhalte wertvolle Einblicke in deine Persönlichkeit, Liebe, Karriere und vieles mehr! Welche Charaktereigenschaften besitzt du? Wie solltest du das Leben leben? Egal ob du neugierig bist oder du mehr über deine astrologischen Eigenschaften erfahren möchtest:</p>
          <p>Wage einen Blick in deine kosmische Zukunft und finde dich selbst mit unserem</p>
          <a href="#/horoskop" type="button">Horoskop-Test!</a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
