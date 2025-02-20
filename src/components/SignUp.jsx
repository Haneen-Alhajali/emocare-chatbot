import React, { useState } from "react";
import '../assets/styles/sign.css';

const SignForm = ({ title, buttonText, onSubmit, linkText, linkTo, linkAction }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes("@") || password.length < 6) {
            setError("Invalid email or password (minimum 6 characters)");
            return;
        }
        setError("");
        onSubmit(email, password);
    };

    return (
        <div className="sign-container">
            <div className="sign-box">
                <h2 className="sign-h2">{title}</h2>
                <form onSubmit={handleSubmit} className="sign-form">
                    <input
                        className="sign-input"
                        type="text"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                    />
                    <input
                        className="sign-input"
                        type="text"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                    <input
                        className="sign-input"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        className="sign-input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="sign-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        className="sign-input"
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <input
                        className="sign-input"
                        type="tel"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <input
                        className="sign-input"
                        type="date"
                        placeholder="Date of Birth"
                        value={dateofbirth}
                        onChange={(e) => setDateofbirth(e.target.value)}
                        required
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button className="sign-button" type="submit">{buttonText}</button>
                </form>
                <p className="sign-p">
                    {linkText}  
                    <a href={linkTo} onClick={(e) => { e.preventDefault(); if (linkAction) linkAction(); }}>
                        Click Here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignForm;
