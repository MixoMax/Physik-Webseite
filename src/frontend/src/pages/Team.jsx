import React from "react";
import "../styles/Team.css";

import pfp_placeholder from '../assets/images/comp/blank-pfp.png';

const Team = () => {
    return (
        <div>
            <h1 className="team-title">Unser Team</h1>
            <div className="team-card-wrapper">
                <div className="team-card">
                    <img className="team-card-image" src={pfp_placeholder} alt="Xuan Hao Li"/>
                    <div className="team-card-name">Xuan Hao Li</div>
                    <div className="team-card-description">Aufgaben:<br></br>Planen des Layouts<br></br>Texte</div>
                </div>
                <div className="team-card">
                    <img className="team-card-image" src={pfp_placeholder} alt="Vincent Winter"/>
                    <div className="team-card-name">Vincent Winter</div>
                    <div className="team-card-description">Aufgaben:<br></br>Recherche<br></br>Texte</div>
                </div>
                <div className="team-card">
                    <img className="team-card-image" src={pfp_placeholder} alt="Linus Horn"/>
                    <div className="team-card-name">Linus Horn</div>
                    <div className="team-card-description">Aufgaben:<br></br>Backend<br></br>Events Page</div>
                </div>
                <div className="team-card">
                    <img className="team-card-image" src={pfp_placeholder} alt="Paul Niemann"/>
                    <div className="team-card-name">Paul Niemann</div>
                    <div className="team-card-description">Aufgaben:<br></br>Frontend<br></br>Styling</div>
                </div>
                <div className="team-card">
                    <img className="team-card-image" src={pfp_placeholder} alt="Yannick Braune"/>
                    <div className="team-card-name">Yannick Braune</div>
                    <div className="team-card-description">Aufgaben:<br></br>Frontend<br></br>Styling</div>
                </div>
            </div>
        </div>
    );
};

export default Team;