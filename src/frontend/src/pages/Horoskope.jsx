import React, { useState, useEffect } from 'react';
import './css/Horoskope.css';
import HoroskopEntry from '../components/horoskop-entry';

const Horoskope = () => {
    const [horoskope, setHoroskope] = useState([]);
    
    useEffect(() => {
        var url = "http://localhost:1890/horoscopes";
        fetch(url)
            .then(res => res.json())
            .then(data => setHoroskope(data));
        // -> [{zodiac_sign: str, horoscope: str}, ...]
    }
    , []);

    return (
        <div className="horoskope">
            <h1>Horoskope</h1>
            {horoskope.map(horoskop => <HoroskopEntry key={horoskop.id} horoskop={horoskop} />)}
        </div>
    );
}

export default Horoskope;