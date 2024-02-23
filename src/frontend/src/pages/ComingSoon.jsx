import React from 'react'
import './css/about.css'
import './css/comingsoon.css'
import himmelsgestein from '../assets/images/Himmelssteine/Himmelsgestein-removebg-preview.png'


function ComingSoon() {
    // This page is a placeholder for future pages

    // spinning moon in the middle
    // "Coming Soon" text under the moon

    return (
        <div className="coming-soon">
            <img src={himmelsgestein} alt="Himmelsgestein" className="himmelsgestein" />
            <h1>Coming Soon</h1>
        </div>
    )
}

export default ComingSoon