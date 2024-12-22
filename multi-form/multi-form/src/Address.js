
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Address.css';

function Address({ formData, updateFormData }) {
  const [localData, setLocalData] = useState(formData);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!localData.phone) newErrors.phone = "Phone number is required";
    if (!localData.dob) newErrors.dob = "Date of birth is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      updateFormData(localData);
      navigate("/review");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-step">
      <h2>Additional Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={localData.phone}
            onChange={(e) => setLocalData({ ...localData, phone: e.target.value })}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            value={localData.dob}
            onChange={(e) => setLocalData({ ...localData, dob: e.target.value })}
          />
          {errors.dob && <span className="error">{errors.dob}</span>}
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Address;
