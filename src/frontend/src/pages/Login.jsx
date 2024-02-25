import React from "react";

const Login = () => {
    return (
        <div className="sign-wrapper">
            <div class="sign-container">
                <h2>Log In</h2>
                <div class="input-box">
                    <input type="text" required="required"></input>
                    <i class="fa-regular fa-user"></i>
                    <span>&#9733; Benutzername/E-Mail</span>
                </div>
                <div class="input-box">
                    <input type="password" required="required"></input>
                    <span>&#x1F512; Passwort eingeben</span>
                </div>
                <div class="input-box">
                    <input type="submit" value="Anmelden"></input>
                </div>
                <p>Noch nicht registriert? <a href="#/sign-up">Sign Up</a></p>
            </div>
        </div>
    );
};

export default Login;