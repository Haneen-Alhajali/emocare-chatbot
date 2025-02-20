import React, { useState } from "react";
import '../assets/styles/auth.css';

const AuthForm = ({ title, buttonText, onSubmit, linkText, linkTo, linkAction }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@") || password.length < 6) {
      setError("Invalid email or password (min 6 characters)");
      return;
    }
    setError("");
    onSubmit(email, password);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-h2">{title}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            className="auth-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button className="auth-button" type="submit">{buttonText}</button>
        </form>
        <p  className="auth-p"
        >
          {linkText} <a href={linkTo}>{linkAction}</a>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
