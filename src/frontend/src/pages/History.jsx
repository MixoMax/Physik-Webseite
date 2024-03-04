import React from "react";
import './css/history.css';

import tower from '../assets/images/comp/wasserturm.svg';
import plan from '../assets/images/comp/plan.svg';
import telescope from '../assets/images/comp/telescope_2.svg';
import science from '../assets/images/comp/science.svg';
import planet from '../assets/images/comp/planet.svg';
import humans from '../assets/images/comp/humans.svg';
import sky from '../assets/images/comp/sky.svg';
import cloud_5 from '../assets/images/clouds/cloud_5.png';
import robot from '../assets/images/comp/robot.svg';
import t from '../assets/images/galaxy/telescope.png';

const History = () => {
    return (
        <div className="history">
            <div className="history-header">
                <h1 className="history-headline">Entdecke unseren Ursprung!</h1>
                <p>Als eines der &auml;ltesten und meistbesuchten Planetarien in Deutschland bietet das Planetarium Hamburg nat&uuml;rlich auch eine umfangreiche Geschichte.&nbsp;</p>
            
                <img className="history-telescope" src={t} alt="Telescope" />
                <img className="history-cloud" src={cloud_5} alt="Cloud" />
                <img className="history-robot" src={robot} alt="Robot" />
            </div>
            <hr className='history-line'/>  
            <div className="history-wrapper-text history-text-right">
                <img className="history-tower" src={tower} alt="Tower" />
                <p><b>1910-1914:</b> Die Geschichte unseres Planetariums begann mit der Idee des damaligen Hamburger Baudirektors Fritz Schumacher (1869-1947), 1910 einen &ldquo;sozialen Park&rdquo; mitsamt Wasserturms anzulegen. Dieser Wasserturm bekam im Winterhuder Stadtpark den wohl repr&auml;sentativsten und sch&ouml;nsten Ort. 1912 begann der Architekt Oscar Menzel den Wasserturm zu bauen. Die Bauarbeiten wurden jedoch kriegsbedingt unterbrochen, wodurch der Turm erst 1916 vollendet werden konnte.</p>
                <br />
            </div>
            <hr className='history-line'/> 
            <div className="history-wrapper-text history-text-left">
                <img className="history-plan" src={plan} alt="Plan" />
                <p><b>1916-1930:</b> Als Wasserturm wurde das Planetarium jedoch nur bis 1924 genutzt, danach wurde es aus dem Versorgungsnetz entfernt. Jedoch wurde er als Wasserturm noch zu Beginn der 30er reaktiviert. Den Weg zur Umentwicklung des Wasserturms zu einem Planetarium ebnete Astronomie-Enthusiast Hans Hagge, der den Hamburger Senat &uuml;berzeugte, ein Planetarium einzurichten. Schon 1925 unterzeichneten die Verantwortlichen des Hamburger Staates mit der Firma Carl Zeiss in Jena einen Vertrag f&uuml;r die Lieferung eines Projektions-Apparates. Jedoch stimmte die Hamburger B&uuml;rgerschaft erst 1929 dem Vorschlag zu, das Planetarium im Winterhuder Wasserturm zu errichten. Und schon am 22. April 1930 lud der Hamburger Senat erste G&auml;ste zu einer Vorf&uuml;hrung ein und eine knappe Woche sp&auml;ter, am 30., &ouml;ffnete dann das Planetarium unter Leitung von Studienrat Dr. K&ouml;rner offiziell.</p>
                <br />
            </div>
            <hr className='history-line'/> 
            <div className="history-wrapper-text history-text-right">  
                <img className="history-telescope" src={telescope} alt="Telescope" />
                <p><b>1930-1975:</b> Zu Beginn z&auml;hlte das Planetarium ca. 3000 monatliche Besucher. 1934 wurde die Leitung des Planetariums an Dr. Johannes Meyer &uuml;bergeben. Er f&uuml;hrte das Planetarium auch durch die schwierigen Kriegsjahre w&auml;hrend des 2. Weltkriegs bis ins Jahr 1964. Im Laufe seiner Amtszeit wurde 1956 das Projektionsger&auml;t modernisiert. Auf Meyer folgte 1964 Dr. Bellmer, der das Planetarium bis 1974 leitete und durch seine Stellvertreter Dr. Ekrutt und Dr. Grambow unterst&uuml;tzt wurde.</p>
                <br />
            </div>
            <hr className='history-line'/> 
            <div className="history-wrapper-text history-text-left">
                <img className="history-science" src={science} alt="Science" />    
                <p><b>1975-2000:</b> 1975 wurde mit Dr. Erich &Uuml;belacker, der erste hauptamtliche Planetariumsleiter eingestellt. Er sorgte f&uuml;r mehr wissenschaftliches und technisches Personal im Planetarium. Die so neu zusammengestellte Mannschaft weitete das Programm aus, was f&uuml;r gr&ouml;&szlig;eren Erfolg sorgte. So stiegen die Besucherzahlen auf knapp &uuml;ber 100.000 und konnten &uuml;ber mehrere Jahre stabil gehalten werden. Desweiteren wurde bis 1983 die Kuppel erneuert, eine Bel&uuml;ftungsanlage eingebaut und ein neuer Projektionsapparat (Zeiss-Modell 6) erworben.</p>
                <br />
            </div>
            <hr className='history-line'/> 
            <div className="history-wrapper-text history-text-right">
                <img className="history-planet" src={planet} alt="Planet" />     
                <p><b>2000-2003:</b> Ab 2000 &uuml;bernahm der Astrophysiker Thomas W. Kraupe die Direktion des Planetariums. W&auml;hrend seiner Amtszeit wurde das Planetarium nach den Entw&uuml;rfen des Hamburger Architekturb&uuml;ros Bothe-Richter-Teherani (BRT) modernisiert. 2003 folgte deswegen eine festliche Wiederer&ouml;ffnung, die zu einem riesigen Ansturm an G&auml;sten f&uuml;hrte. Durch den Umabu umfasste das Planetarium ein weltweit einzigartiges Projektions-Ensemble, das stetig auf den j&uuml;ngsten Stand gebracht wird - so z.B. seitdem die neue Sternenkuppel.</p>
                <br />
            </div>
            <hr className='history-line'/> 
            <div className="history-wrapper-text history-text-left">  
                <img className="history-humans" src={humans} alt="Humans" />     
                <p><b>2003-2015:</b> Die Wiederer&ouml;ffnung sorgte auch f&uuml;r einen allgemein gewaltigen Publikums-Zuspruch - so konnten die Besucherzahlen auf ca. 300.000 erh&ouml;ht werden, was es mit weitem Abstand zum bestbesuchten deutschsprachigen Planetarium machte. Dar&uuml;ber sorgen nun drei bis vier gro&szlig;e Produktionen als Premieren, Europapremieren oder Urauff&uuml;hrungen daf&uuml;r, dass das Hamburger Planetarium weltweit zu den renommiertesten Sterntheatern geh&ouml;rt.&nbsp;</p>
                <br />
            </div>
            <hr className='history-line'/> 
            <div className="history-wrapper-text history-text-right">     
                <img className="history-sky" src={sky} alt="Sky" />  
                <p><b>2015-heute:</b> 2015 wurde das Planetarium f&uuml;r weitere Umbau und Erweiterungsarbeiten im Sockelbereich des Turmes bis 2017 geschlossen. Deswegen bietet das Planetarium seit 2017 mehr Angebote und Raum f&uuml;r die Besucher, einen barrierefreien Zugang zum Sternsaal, sowie das Cafe Nordstern mit einem Innen- und Au&szlig;enbereich.</p>
                <br />
            </div>
        </div>
    );
};

export default History;