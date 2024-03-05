import React from "react";
import './css/space.css';

import solar_system from '../assets/images/comp/SolarSystem.svg';
import saturn from '../assets/images/planets/saturn.svg';
import sun from '../assets/images/galaxy/sun.webp';
import moon from '../assets/images/planets/moon.svg';
import stars from '../assets/images/planets/stars.svg';
import stars_2 from '../assets/images/planets/stars_2.svg';
import stars_3 from '../assets/images/planets/stars_3.svg';
import cloud_1 from '../assets/images/clouds/cloud_1.png';
import cloud_2 from '../assets/images/clouds/cloud_2.png';
import cloud_3 from '../assets/images/clouds/cloud_3.png';
import cloud_4 from '../assets/images/clouds/cloud_4.png';
import cloud_5 from '../assets/images/clouds/cloud_5.png';
import star_dots from '../assets/images/galaxy/stars_5.svg';
import galaxy_4 from '../assets/images/galaxy/galaxy_4.png';
import planet_system from '../assets/images/planets/planet_system_light.svg';

const Space = () => {

    return (
    <div className="space">
        <div className="space-header">
            <span className="crater crater-1"></span>
            <span className="crater crater-2"></span>
            <span className="crater crater-3"></span>
            <div className="space-circle space-headline">
                <img src={saturn} alt="saturn"></img>
                <h1>Entdecke das Weltall!</h1>
            </div>
            <div className="space-circle space-sun">
                <img src={sun} alt="Sonne" />
                <h2>Sonne</h2>
            </div>
            <div className="space-circle space-moon">
                <img src={moon} alt="Mond" />
                <h2>Mond</h2>
            </div>
            <div className="space-circle space-stars">
                <img src={stars} alt="Sterne" />
                <h2>Sterne</h2>
            </div>
        </div>
        <hr className='space-line'/>

        <div className="space-wrapper-text space-passage-1">
            <div className="space-text-left">
                <p>Unser Sonnensystem ist voller faszinierender Himmelskörper, von denen die Erde, der Mond und die Sonne nur einige sind. Tauche ein in die Welt der Astronomie und entdecke die Geheimnisse und Wunder, die unseren Planeten und seine Begleiter ausmachen!</p>
                <p>Unsere Erde: Die Erde, unser Zuhause, ist der dritte Planet der Sonne und der einzige bekannte Ort im Universum, der Leben beherbergt. Mit einer Vielzahl an Ökosystemen, Landschaften, Klimazonen und einem einzigartigen Magnetfeld bietet die Erde eine unglaubliche Vielfalt an Lebensformen. Entdecke die erstaunlichen Phänomene wie die Jahreszeiten, Wetterphänomene, Ozeane und Kontinente, die unseren Planet so einzigartig machen.</p>
                <p>Der Mond: Unser treuer Begleiter, der Mond, ist der natürliche Satellit der Erde. Mit seiner beeindruckenden Oberfläche, die von Kratern und Bergen geprägt ist, fasziniert der Mond die Menschheit seit Jahrtausenden, unter anderem durch seine unterschiedlichen Phasen. Der einzige Himmelskörper, auf den die Menschen jemals hingereist sind, erzeugt gleichzeitig Ebbe und Flut.</p>
                <p>Die Sonne: Die Sonne, der strahlende Stern in unserem Sonnensystem, ist die Quelle allen Lebens und Lichts. Die unglaubliche Größe und Hitze der Sonne begrüßt uns Tag für Tag mit warmem Licht. Durch das Gegenspiel von der Sonne und dem Mond entstehen Sonnen- und Mondfinsternisse. Erfahre mehr über ihre Zusammensetzung, Energieerzeugung und die Auswirkungen auf das Leben auf der Erde!</p>
                <br/>
            </div>
            <hr className='space-line'/>
            
            <div>
                <h2>Unser Sonnensystem</h2>
                <p>Unser Sonnensystem ist ein System, das die Sonne, acht Planeten, zahlreiche Zwergplaneten, Monde und andere Himmelskörper umfasst. Die Sonne ist der Mittelpunkt des Sonnensystems und übt eine gravitative Anziehungskraft auf die um sie umkreisenden Objekte aus. Jeder Planet hat seine eigenen einzigartigen Eigenschaften, Umlaufbahnen und Monde. Um sich die Planeten unseres Sonnensystems zu merken, hilft folgender Spruch: “
                    <span onMouseEnter={e => e.target.innerHTML = "<b>Merkur</b> "} onMouseLeave={e => e.target.innerHTML ="<b>M</b>ein "}><b>M</b>ein </span>
                    <span onMouseEnter={e => e.target.innerHTML = "<b>Venus</b> "} onMouseLeave={e => e.target.innerHTML ="<b>V</b>ater "}><b>V</b>ater </span>
                    <span onMouseEnter={e => e.target.innerHTML = "<b>Erde</b> "} onMouseLeave={e => e.target.innerHTML ="<b>E</b>rklärt "}><b>E</b>rklärt </span>
                    <span onMouseEnter={e => e.target.innerHTML = "<b>Mars</b> "} onMouseLeave={e => e.target.innerHTML ="<b>M</b>ir "}><b>M</b>ir </span>
                    <span onMouseEnter={e => e.target.innerHTML = "<b>Jupiter</b> "} onMouseLeave={e => e.target.innerHTML ="<b>J</b>eden "}><b>J</b>eden </span>
                    <span onMouseEnter={e => e.target.innerHTML = "<b>Saturn</b> "} onMouseLeave={e => e.target.innerHTML ="<b>S</b>onntag "}><b>S</b>onntag </span>
                    <span onMouseEnter={e => e.target.innerHTML = "<b>Uranus</b> "} onMouseLeave={e => e.target.innerHTML ="<b>U</b>nseren "}><b>U</b>nseren </span>
                    <span onMouseEnter={e => e.target.innerHTML = "<b>Neptun</b>"} onMouseLeave={e => e.target.innerHTML ="<b>N</b>achthimmel"}><b>N</b>achthimmel</span>”
                </p>
            </div>

            <img className="space-stars-2" src={stars_2} alt="Stars" />
            <img className="space-cloud-1" src={cloud_1} alt="Cloud" />
        </div>

        <div className="solar-system">
            <img className="solar-system-img" src={solar_system} alt="solar system" />
            <div className="solar-system-text">
                <p className="space-info-card card-merkur"><b>M</b>erkur: Der innerste und kleinste Planet in unserem Sonnensystem heißt Merkur. Er hat keinen Mond und umkreist die Sonne in nur 88 Tagen. Aufgrund seiner Nähe zur Sonne erreicht Merkur extrem hohe Temperaturen von bis zu 430°C tagsüber und kann nachts auf -180°C abkühlen. Merkur hat eine felsige Oberfläche mit Kratern, Schluchten und ebenen Flächen. Seine Atmosphäre ist dünn und besteht hauptsächlich aus Helium und Spuren von Sauerstoff und Natrium.</p>
                <p className="space-info-card card-venus"><b>V</b>enus: Die Venus, benannt nach der römischen Göttin der Liebe und Schönheit, ist der zweite Planet in unserem Sonnensystem und der hellste am Nachthimmel. Mit einer durchschnittlichen Oberflächentemperatur von etwa 465°C ist sie der heißeste Planet im Sonnensystem, obwohl Merkur näher an der Sonne liegt. Die Venus ist von einer dicken Wolkendecke aus Schwefelsäure umgeben, die das Sonnenlicht reflektiert und den Planeten in einem intensiven Gelb erstrahlen lässt. Aufgrund der extremen Temperaturen und des starken atmosphärischen Drucks ist die Oberfläche der Venus eine lebensfeindliche Umgebung</p>
                <p className="space-info-card card-earth"><b>E</b>rde: Er ist der dritte Planet in unserem Sonnensystem und der einzige bekannte Planet, auf dem Leben existiert und flüssiges Wasser vorkommt. Sie hat einen durchschnittlichen Abstand von etwa 150 Mio. Kilometern zur Sonne und eine Umlaufzeit von etwa 365 Tagen. Die Erde besitzt viele komplexe Ökosysteme und eine dichte Atmosphäre. Diese enthält Sauerstoff und andere lebenswichtige Gase. </p>
                <p className="space-info-card card-mars"><b>M</b>ars: Auch bekannt als der Rote Planet, ist er der vierte Planet in unserem Sonnensystem und der äußere Nachbar der Erde. Er ist nach dem römischen Kriegsgott benannt und hat eine auffällig rötliche Färbung aufgrund des hohen Eisengehalts in seinem Boden. Der Mars hat eine dünnere Atmosphäre als die Erde und ist durch seine charakteristischen polaren Eiskappen und ausgetrockneten Flussbetten gekennzeichnet, die auf einst flüssiges Wasser hinweisen. Er ist Ziel für die Erforschung und Raumfahrtmissionen, da er möglicherweise Spuren von Leben beherbergt oder in der Zukunft besiedelt werden könnte.</p>
                <p className="space-info-card card-jupiter"><b>J</b>upiter: Der Jupiter, der größte Planet in unserem Sonnensystem. ist ein Gasriese und der fünfte Planet von der Sonne aus gesehen. Er ist bekannt für sein markantes Aussehen mit breiten Wolken-Gürteln und dem Großen Roten Fleck, einem riesigen Sturm. Jupiter hat eine immense Gravitationskraft und viele Monde, darunter den größten Mond im Sonnensystem, Ganymed. Forscher interessieren sich besonders für Jupiter, da er Einblicke in die Entstehungsgeschichte unseres Sonnensystems bietet.</p>
                <p className="space-info-card card-saturn"><b>S</b>aturn: Er ist der sechste Planet in unserem Sonnensystem und sticht durch seine beeindruckenden Ringe heraus, die ihn umgeben. Diese Ringe bestehen hauptsächlich aus Eis und Gesteinsbrocken in verschiedenen Größen. Saturn ist ein Gasriese und besitzt eine dichte Atmosphäre, die hauptsächlich aus Wasserstoff und Helium besteht. Er ist der zweitgrößte Planet im Sonnensystem und hat eine markante goldene Farbe. Saturn hat auch eine Vielzahl von Monden, darunter Titan, welcher die einzig bekannte Atmosphäre auf einem Mond besitzt.</p>
                <p className="space-info-card card-uranus"><b>U</b>ranus: Der drittgrößte Planet nach Durchmesser ist ein Eisriese und besteht hauptsächlich aus Wasserstoff und Helium, jedoch mit einem hohen Anteil an Methan, der ihm die charakteristische blau-grüne Farbe verleiht. Seine ungewöhnliche Achsenneigung führt dazu, dass Uranus auf seiner Seite rollt. Auch der Uranus besitzt ein Ringsystem und außerdem 27 Monde</p>
                <p className="space-info-card card-neptune"><b>N</b>eptun: Benannt nach dem römischen Gott des Meeres, ist Neptun der achte und äußerste Planet unseres Sonnensystems. Wie Uranus ist Neptun ein Eisriese, jedoch dichter und massereicher. Seine Umlaufbahn um die Sonne dauert etwa 165 Jahre und befindet sich ca. 4,5 Mrd. Kilometer von der Sonne entfernt. Der größte seiner 14 Mode heißt Triton, der rückläufig um den Planet kreist.</p>
                <p className="space-info-card card-pluto"><b>P</b>luto: Der ehemals neunte Planet ist benannt nach dem römischen Gott der Unterwelt. Nachdem, um die 2000 Wende, viele ähnlich große Himmelskörper in unserem Sonnensystems entdeckt wurden, wurde Plutos Planetenstatus fraglich. Pluto ist zwar groß genug, um eine Kugelform auszubilden, aber nicht groß genug, um eine Bahn-Dominanz auszuüben. Deshalb wurde ihm 2006 von der IAU vom Planeten zum Zwergplaneten abgestuft.</p>
                
                <span className="crater crater-4"></span>
                <img className="space-cloud-3" src={cloud_3} alt="Cloud" />
                <img className="space-cloud-4" src={cloud_4} alt="Cloud" />
            </div>
        </div>
        <hr className='space-line'/>

        <div className="space-wrapper-text space-text-left space-passage-3">
            <h2>Die Milchstraße </h2>
            <p>Die Milchstraße ist unsere galaktische Heimat, ein riesiges System aus Milliarden von Sternen, Gas, Staub und Dunkler Materie. Als Spiralgalaxie hat sie einen Durchmesser von etwa 100.000 Lichtjahren und eine Masse von ungefähr 1,5 Billionen Sonnenmassen. Die Milchstraße gehört zu den Balkengalaxien. Sie besitzt im Zentrum einen Bulge. Dieser wirkt aufgrund seiner hohen Dichte heller. Um diesen Bulge befinden sich vier Spiralarme, die sich primär durch junge Sterne und Gaswolken abzeichnen, wobei sich in zwei Armen auch ältere Sterne befinden. Unsere Sonne liegt in einem der äußeren Arme, etwa 25.000 Lichtjahre vom galaktischen Zentrum entfernt.</p>
            <p>Im Zentrum der Milchstraße existiert ein supermassives schwarzes Loch namens Sagittarius A*, welches sich im Sternbild Schütze befindet. Sie ist 4,15 Mio. massereicher als unsere Sonne und wurde in den 1990er Jahren entdeckt. Erste Aufnahmen wurden 2017 durch das Event Horizon Telescope gemacht.</p>
            <p>Die Erforschung der Milchstraße ist eine der Hauptaufgaben der modernen Astronomie. Astronomen nutzen Teleskope auf der Erde und im Weltraum, um die Struktur, Zusammensetzung und Entwicklung unserer Galaxie zu untersuchen. Durch die Analyse von Sternbewegungen, interstellarem Gas und anderen galaktischen Eigenschaften können Wissenschaftler wichtige Erkenntnisse über die Entstehung und Evolution von Galaxien gewinnen.</p>
            <br />

            <img className="space-star-dots" src={star_dots} alt="Cloud" />
            <img className="space-cloud-2" src={cloud_2} alt="Cloud" />
        </div>
        <hr className='space-line'/>

        <div className="space-wrapper-text space-text-right space-passage-4">
            <h2>Ferne Galaxien</h2>
            <p>Ferne Galaxien sind faszinierende kosmische Objekte, die oft weit entfernt von unserer Milchstraße liegen. Diese riesigen Ansammlungen von Sternen, Gas, Staub und Dunkler Materie bieten einen faszinierenden Einblick in die Vielfalt und die Entwicklung des Universums.</p>
            <p>Eine der bemerkenswertesten Eigenschaften ferner Galaxien ist ihre Vielfalt. Es gibt verschiedene Arten von Galaxien, darunter elliptische Galaxien, Spiralgalaxien und irreguläre Galaxien. Jede dieser Galaxientypen hat ihre eigenen charakteristischen Merkmale, die durch ihre Form, Struktur und Sternbildungsraten bestimmt werden.</p>
            <p>Ein weiteres faszinierendes Merkmal ferner Galaxien ist ihre Entfernung. Da das Licht eine endliche Geschwindigkeit hat, sehen wir Galaxien so, wie sie in der Vergangenheit waren, als das Licht aus ihnen zu uns reiste. Dies ermöglicht es Astronomen, in die Vergangenheit des Universums zurückzublicken und die Entwicklung und Evolution von Galaxien im Laufe der Zeit zu studieren.</p>
            <p>Ferne Galaxien spielen auch eine wichtige Rolle bei unserem Verständnis der kosmischen Struktur und der Entstehung des Universums. Durch die Untersuchung ihrer Verteilung und Bewegung können Wissenschaftler Modelle erstellen, die helfen, die Entstehung und Entwicklung des Universums zu erklären.</p>
            <p>Darüber hinaus dienen ferne Galaxien als Laboratorien für die Erforschung verschiedener astrophysikalischer Phänomene, darunter Supernovaexplosionen, aktive galaktische Kerne und die Entstehung von Schwarzen Löchern. Durch die Beobachtung und Analyse ferner Galaxien können Wissenschaftler wichtige Erkenntnisse über die Physik und die fundamentalen Kräfte des Universums gewinnen.</p>
            <p>Insgesamt bieten ferne Galaxien einen faszinierenden Einblick in die Natur des Universums und spielen eine entscheidende Rolle bei unserem Streben, die Geheimnisse des Kosmos zu entschlüsseln. Ihre Untersuchung und Erforschung wird weiterhin dazu beitragen, unser Verständnis des Universums und unsere eigene Position darin zu vertiefen.</p>
            <p>Ferne Galaxien, die sich weit außerhalb unserer Milchstraße befinden, faszinieren Wissenschaftler und Amateurastronomen gleichermaßen. Besonders interessant für Wissenschaftler ist die Andromedagalaxie. Ihre Nähe zur Milchstraße ermöglicht ihnen die umfangreiche Erforschung, die auch Rückschlüsse über die Geschichte der Milchstraße ermöglicht. Mit einer Entfernung von 2,5 Mio. Lichtjahren ist sie das entfernteste Objekt, das mit bloßem Auge am Nachthimmel beobachtet werden kann. Ihre Masse wird auf 0,7 bis 2,5 Billionen Sonnenmassen geschätzt und damit etwas so massereich wie die Milchstraße, während der Durchmesser der Andromedagalaxie doppelt so groß ist.</p>
            <br />

            <img className="space-galaxy-4" src={galaxy_4} alt="Galaxy" />
        </div> 
        <hr className='space-line'/>

        <div className="space-wrapper-text space-text-left space-passage-5">
            <span className="crater crater-5"></span>
            <span className="crater crater-6"></span>

            <h2>Ferne Sterne(nsysteme)</h2>
            <p>Ferne Sterne und Sternensysteme: Eine Reise durch die Weiten des Universums</p>
            <p>Im unendlichen Kosmos, der &uuml;ber uns ausgebreitet ist, existiert eine unvorstellbare Vielfalt an Sternen und Sternensystemen, die uns faszinieren und zum Staunen bringen. Diese fernen Himmelsk&ouml;rper sind nicht nur Gegenstand astronomischer Beobachtungen, sondern auch wichtige Bausteine f&uuml;r unser Verst&auml;ndnis des Universums und seiner Entwicklung. In diesem wissenschaftlichen Text werden wir eine Reise durch die Welt der fernen Sterne und Sternensysteme unternehmen, um ihre Eigenschaften, ihre Entstehung und ihre Bedeutung zu erkunden.</p>
            <p>Sterne: Die leuchtenden Grundbausteine des Universums</p>
            <p>Sterne sind riesige, leuchtende Himmelsk&ouml;rper, die aus hei&szlig;em Gas bestehen und ihr Licht und ihre Energie durch Kernfusion erzeugen. Diese fusionierenden Prozesse wandeln Wasserstoff in Helium um und setzen dabei enorme Mengen an Energie frei, die in Form von Licht und W&auml;rme in den Weltraum abgestrahlt werden. Sterne variieren in Gr&ouml;&szlig;e, Masse, Temperatur und Leuchtkraft, was zu einer Vielzahl von Sterntypen f&uuml;hrt, darunter Zwergsterne, Riesensterne, Neutronensterne und sogar Schwarze L&ouml;cher.</p>
            <p>Sternensysteme: Gemeinsame Reisen im Weltraum</p>
            <p>Sternensysteme bestehen aus mehreren Sternen, die durch Gravitationskr&auml;fte aneinander gebunden sind. Das bekannteste Beispiel eines Sternensystems ist unser eigenes Sonnensystem, das die Sonne und ihre begleitenden Planeten, Monde, Asteroiden und Kometen umfasst. Es gibt jedoch auch Doppelsternsysteme, Mehrfachsternsysteme und sogar komplexere Systeme mit einer Vielzahl von Sternen.</p>
            <p>Entstehung von Sternen und Sternsystemen: Ein Blick in die kosmische Geburtsst&auml;tte</p>
            <p>Die Entstehung von Sternen und Sternensystemen ist ein faszinierender Prozess, der in riesigen Gas- und Staubwolken, den sogenannten Molek&uuml;lwolken, stattfindet. Durch die Schwerkraft beginnen diese Wolken allm&auml;hlich zu kollabieren und verdichten sich zu dichten Kernregionen, in denen sich schlie&szlig;lich Sterne bilden. In einigen F&auml;llen k&ouml;nnen sich aus denselben Wolken mehrere Sterne bilden, die dann ein Sternensystem bilden.</p>
            <p>Bedeutung von fernen Sternen und Sternensystemen f&uuml;r die Astronomie und Kosmologie</p>
            <p>Die Erforschung ferner Sterne und Sternensysteme ist von entscheidender Bedeutung f&uuml;r unser Verst&auml;ndnis des Universums und seine Entwicklung. Durch die Untersuchung ihrer Eigenschaften k&ouml;nnen Astronomen Einblicke in die Physik von Sternen, die Entstehung von Planeten und sogar die Entwicklung von Galaxien gewinnen. Dar&uuml;ber hinaus helfen uns ferne Sterne und Sternensysteme, die fundamentale Frage nach unserer kosmischen Herkunft und unserem Platz im Universum zu beantworten.</p>
            <p>Insgesamt sind ferne Sterne und Sternensysteme faszinierende Objekte, die uns einen Einblick in die Sch&ouml;nheit und Komplexit&auml;t des Universums bieten. Ihre Erforschung treibt die Grenzen unseres Wissens immer weiter voran und inspiriert Generationen von Wissenschaftlern und Weltraumbegeisterten, sich weiterhin den Geheimnissen des Kosmos zu widmen.</p>
            <br />

            <img className="space-stars-3" src={stars_3} alt="Stars" />
            <img className="space-planet-system" src={planet_system} alt="Planet System" />
            <img className="space-cloud-5" src={cloud_3} alt="Cloud" />
        </div>
        <hr className='space-line'/>  

        <div className="space-wrapper-text space-text-right space-passage-6">   
            <h1>Das Universum:</h1>
            <p>Das Universum beschreibt die G&auml;nze von Raum, Zeit und aller aller Materie und Energie darin.&nbsp; Das beobachtbare Universum beschreibt dahingehend den Teil des Universums der von der Erde durch Beobachtungen erschlossen werden kann. Das Universum ist eines der gro&szlig;en Mysterien, die wir Menschen versuchen zu entschl&uuml;sseln und zu studieren. Aufgrund dessen erschufen wir das physikalische Teilgebiet der Kosmologie.</p>
            <p>Zur Beschreibung der gro&szlig;r&auml;umigen Struktur des Universums nutzt man das Standardmodell der Kosmologie. Dieses sogenannte Lambda-CDM-Modell, beschreibt anhand weniger (in seiner Grundform sechs) Parameter die Entwicklung des Universums seit dem Urknall. Bei den sechs Parametern handelt es sich um:&nbsp;</p>

            <p>&#9;-&#9;Die Hubble-Konstante - beschreibt, wie schnell sich Himmelsk&ouml;rper in Bezug auf den Betrachter bewegen.</p>
            <p>&#9;-&#9;Den Anteil an baryonischen Materie (der aus Atomen aufgebauten Materie) an der Gesamtenergiedichte</p>
            <p>&#9;-&#9;Gesamtanteil der Materie an der Gesamt-Energiedichte</p>
            <p>&#9;-&#9;Optische Dicke bis zum Zeitalter der Reionisierung</p>
            <p>&#9;-&#9;Kr&uuml;mmungsfluktuationsamplitude der skalaren Komponente der urspr&uuml;nglichen Schwankungen</p>
            <p>&#9;-&#9;spektraler Index der skalaren Komponente der urspr&uuml;nglichen Schwankungen</p>

            <p>Das Lambda-CDM-Modell stimmt gut mit den drei wichtigsten Klassen von Beobachtungen ein, die uns Aufschluss &uuml;ber das fr&uuml;he Universum geben. So der Vermessung der Anisotropie (Richtungsabh&auml;ngigkeit) der Hintergrundstrahlung, der Bestimmung der Ausdehnungsgeschwindigkeit und ihrer zeitlichen Ver&auml;nderung durch Beobachtungen von Supernovae in fernen Galaxien, sowie den Daten &uuml;ber Superstrukturen im Kosmos.&nbsp;</p>
            <p>Urknalltheorie:</p>
            <p>Die Urknalltheorie beschreibt den heutzutage weithin anerkannten Sachverhalt, dass das Universum in einem Augenblick, dem Urknall, aus einer Singularit&auml;t entstanden ist und sich seitdem stetig ausdehnt. Aus dem wird geschlossen, dass Zeit, Raum und Materie mit dem Urknall entstanden sind.&nbsp; Zeit, Raum vor dem Urknall und Raum au&szlig;erhalb des Universums sind laut dieser Theorie physikalisch nicht definierbar.</p>
            <br />
            
            <img className="space-stars-1" src={stars} alt="Stars" />
            <img className="space-stars-2" src={stars_2} alt="Stars" />
            <img className="space-stars-3" src={stars_3} alt="Stars" />
            <img className="space-cloud-1" src={cloud_1} alt="Cloud" />
            <img className="space-cloud-4" src={cloud_4} alt="Cloud" />
        </div>
    </div>
    );
};

export default Space;