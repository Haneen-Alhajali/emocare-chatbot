import React from "react";
import { useNavigate } from "react-router-dom";
import SignForm from "../../components/SignUp";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (email, password, username, address, phone, firstname, lastname, dateofbirth, gender, role) => {
    console.log("Signing up with:", email, password, username, address, phone, firstname, lastname, dateofbirth, gender, role);
    navigate("/login");
  };

  return (
    <SignForm
      title="Create an Account"
      buttonText="Sign Up"
      onSubmit={handleSignup}
      linkText="Already have an account?"
      linkTo="/login"
      linkAction={() => navigate("/login")}
      additionalFields={[
        { name: "username", label: "Username" },
        { name: "address", label: "Address" },
        { name: "phone", label: "Phone" },
        { name: "firstname", label: "First Name" },
        { name: "lastname", label: "Last Name" },
        { name: "dateofbirth", label: "Date of Birth" },
        { name: "gender", label: "Gender" },
        { name: "role", label: "Role" }
      ]}
    />
  );
};

export default Signup;
