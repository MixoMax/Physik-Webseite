import React from 'react'
import './css/horoskop-entry.css'

function HoroskopEntry({ horoskop }) {
    // {zodiac_sign: str, horoscope: str}

    return (
        <div id="horoskop-component-wrapper" class="hbox">
            <div id="horoskop-info" class="hbox-grid">
                <h2>{horoskop.zodiac_sign}</h2>
                <div id="left-border"></div>
                <p id="horoskop-description">{horoskop.horoscope}</p>
            </div>
        </div>
    )
}

export default HoroskopEntry