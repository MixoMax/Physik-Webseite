import React from 'react'
import './css/about.css'
import './css/comingsoon.css'
import comming_soon_img from '../assets/images/comp/telescope.svg'


function ComingSoon() {
    // This page is a placeholder for future pages

    return (
        <div className="coming-soon">
            <img src={comming_soon_img} alt="coming-soon-img" id="coming-soon-img" />
            <h1 id="coming-soon-text">Coming Soon <small><sup>TM</sup></small> ...</h1>
        </div>
    )
}

export default ComingSoon