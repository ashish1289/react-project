// ReviewSubmit.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Review.css";

function Review({ formData }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("Form Submitted!");
    navigate("/");
  };

  return (
    <div className="form-step">
      <h2>Review and Submit</h2>
      <div>
        <h3>Personal Information</h3>

        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
      </div>
      <div>
        <h3>Additional Information</h3>
        <p>Phone Number: {formData.phone}</p>
        <p>Date of Birth: {formData.dob}</p>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Review;
