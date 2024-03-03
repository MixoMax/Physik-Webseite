import React, { useContext, useState } from "react";
import { UserContext } from '../contexts/UserContext';

const Login = () => {
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
                <h2>Log In</h2>
                <div class="input-box">
                    <input type="text" required="required" onChange={e => setUsername(e.target.value)}></input>
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
            </form>
        </div>
    );
};

export default Login;