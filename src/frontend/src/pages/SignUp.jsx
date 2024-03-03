import React, { useContext, useState } from "react";
import './css/signup.css';
import { UserContext } from '../contexts/UserContext';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const { setUser } = useContext(UserContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        // Here you would typically send a request to your backend to create the user
        // After successful creation, you can set the user in the context
        setUser({ username });
        window.location.href = "#/";
        // Redirect user to another page or show a success message
    };

    return (
        <div className="sign-wrapper">
            <form class="sign-container" onSubmit={handleSignUp}>
                <h2>Sign Up</h2>
                <div class="input-box">
                    <input type="text" required="required" onChange={e => setUsername(e.target.value)}></input>
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
            </form>
        </div>
    );
};

export default SignUp;