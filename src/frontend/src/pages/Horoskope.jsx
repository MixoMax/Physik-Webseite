import React, { useState, useEffect } from 'react';
import './css/Horoskope.css';
import HoroskopEntry from '../components/horoskop-entry';

const Horoskope = () => {
    const [horoskope, setHoroskope] = useState([]);
    const [source, setSource] = useState("");
    
    useEffect(() => {
        try {
            var url = "/horoscopes";
            fetch(url)
                .then(res => res.json())
                .then(data => {setHoroskope(data.horoscopes); setSource(data.source); console.log(data)})
        // -> {horoscopes: [{zodiac_sign: str, horoscope: str}, ...], source: str}
        } catch (error) {
            console.error("Error fetching horoscopes: ", error);
            setHoroskope(
                [
                    {
                      "zodiac_sign": "Widder",
                      "horoscope": "Ein überraschendes Zusammentreffen wird eine frische Perspektive bringen."
                    },
                    {
                      "zodiac_sign": "Stier",
                      "horoscope": "Ein kleiner Erfolg am Arbeitsplatz wird dein Selbstvertrauen stärken."
                    },
                    {
                      "zodiac_sign": "Zwillinge",
                      "horoscope": "Ein unerwartetes Gespräch wird Freude bringen."
                    },
                    {
                      "zodiac_sign": "Krebs",
                      "horoscope": "Ein gemütlicher Abend zu Hause wird genau das sein, was du brauchst."
                    },
                    {
                      "zodiac_sign": "Löwe",
                      "horoscope": "Ein Zufallstreffen wird dir deine Würde vor Augen führen."
                    },
                    {
                      "zodiac_sign": "Jungfrau",
                      "horoscope": "Ein einfacher Akt der Nächstenliebe wird deinen Tag aufhellen."
                    },
                    {
                      "zodiac_sign": "Waage",
                      "horoscope": "Ein kurzer Moment der Einsamkeit wird Klarheit bringen."
                    },
                    {
                      "zodiac_sign": "Skorpion",
                      "horoscope": "Ein vergessenes Erinnerung wird wieder auftreten und ein Lächeln auf dein Gesicht zaubern."
                    },
                    {
                      "zodiac_sign": "Schütze",
                      "horoscope": "Eine spontane Entscheidung wird zu einem Abenteuer führen."
                    },
                    {
                      "zodiac_sign": "Steinbock",
                      "horoscope": "Ein kleiner Gestus der Liebe wird für dich unschlagbar sein."
                    },
                    {
                      "zodiac_sign": "Wassermann",
                      "horoscope": "Eine neue Idee wird dich begeistern und inspirieren."
                    },
                    {
                      "zodiac_sign": "Fische",
                      "horoscope": "Ein friedlicher Moment in der Natur wird deine Seele laben."
                    }
                  ]
            )
        }
    }, []);

    return (
        <div id="horoskope-wrapper">
            <h1>Horoskope</h1>
            <p id="haftungsausschluss">Die auf dieser Website bereitgestellten Horoskope und astrologischen Inhalte dienen lediglich der Unterhaltung und stellen keine professionelle Beratung oder Entscheidungshilfe dar; die Betreiber übernehmen keinerlei Haftung für Handlungen, die auf Basis dieser Inhalte getroffen werden.</p>
              <div className="horoskope">
                {horoskope.map(horoskop => <HoroskopEntry key={horoskop.id} horoskop={horoskop} />)}
            </div>
            <p>Quelle: {source}</p>
        </div>
    );
}

export default Horoskope;