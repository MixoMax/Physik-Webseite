import React from 'react'
import './css/about.css'
import './css/comingsoon.css'
import himmelsgestein from '../assets/images/Himmelssteine/Himmelsgestein-removebg-preview.png'


function ComingSoon() {
    // This page is a placeholder for future pages

    return (
        <div className="coming-soon">
            <img src={himmelsgestein} alt="Himmelsgestein" id="himmelsgestein" />
            <h1 id="comingSoonText">Coming Soon</h1>
        </div>
    )
}

export default ComingSoon