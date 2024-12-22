import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Personalinfo from "./Personalinfo";
import Address from "./Address";
import Review from "./Review";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
  });

  const updateFormData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <Router>
      <div>
        <h1 className="text-align:center">Multi-Step Form</h1>
        <Routes>
          <Route
            path="/"
            element={
              <Personalinfo
                formData={formData}
                updateFormData={updateFormData}
              />
            }
          />
          <Route
            path="/address"
            element={
              <Address formData={formData} updateFormData={updateFormData} />
            }
          />
          <Route path="/review" element={<Review formData={formData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
