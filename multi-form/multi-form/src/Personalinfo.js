import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./";
import "./Personal.css";

function Personalinfo({ formData, updateFormData }) {
  const [localData, setLocalData] = useState(formData);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!localData.firstName) newErrors.firstName = "First name is required";
    if (!localData.lastName) newErrors.lastName = "Last name is required";
    if (!localData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(localData.email))
      newErrors.email = "Email is invalid";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      updateFormData(localData);
      navigate("/address");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-step">
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
         
          <input
            type="text"
            value={localData.firstName}
            onChange={(e) =>
              setLocalData({ ...localData, firstName: e.target.value })
            }

          />
           <br />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={localData.lastName}
            onChange={(e) =>
              setLocalData({ ...localData, lastName: e.target.value })
            }
          />
           <br />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div>
          <label>Email Id:</label>
          <input
            type="email"
            value={localData.email}
            onChange={(e) =>
              setLocalData({ ...localData, email: e.target.value })
            }
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Personalinfo;
