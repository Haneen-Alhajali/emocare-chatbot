import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    console.log("Logging in with:", email, password);
    navigate("/chat");
  };

  return (
    <AuthForm
      title="😊 Welcome Back"
      buttonText="Log In"
      onSubmit={handleLogin}
      linkText="Don't have an account?"
      linkTo="/signup"
      linkAction={() => navigate("/signup")}
      linkLabel="Sign Up"
    />
  );
};

export default Login;
