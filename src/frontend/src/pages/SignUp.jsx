import React from "react";
import './css/signup.css';

const SignUp = () => {
    return (
        <div className="sign-wrapper">
            <div class="sign-container">
                <h2>Sign Up</h2>
                <div class="input-box">
                    <input type="text" required="required"></input>
                    <span>&#9733; Benutzername</span>
                </div>
                <div class="input-box">
                    <input type="text" required="required"></input>
                    <span>&#9993; E-Mail Adresse</span>
                </div>
                <div class="input-box">
                    <input type="password" required="required"></input>
                    <span>&#x1F512; Passwort erstellen</span>
                </div>
                <div class="input-box">
                    <input type="password" required="required"></input>
                    <span>&#x1F512; Passwort bestätigen</span>
                </div>
                <div class="input-box">
                    <input type="submit" value="Account erstellen"></input>
                </div>
                <p>Schon registriert? <a href="#/login">Log in</a></p>
            </div>
        </div>
    );
};

export default SignUp;