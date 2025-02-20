import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (email, password) => {
    console.log("Signing up with:", email, password);
    navigate("/chat");
  };

  return (
    <AuthForm
      title="Create an Account"
      buttonText="Sign Up"
      onSubmit={handleSignup}
      linkText="Already have an account?"
      linkTo="/login"
      linkAction="Log In"
    />
  );
};

export default Signup;
