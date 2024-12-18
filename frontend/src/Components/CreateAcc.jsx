import React, { useState } from "react";
import "./CreateAcc.css"; // Assuming a CSS file for styles

const CreateAcc = () => {
    
   
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    dob: "",
    gender: "",
    flatNo: "",
    streetName: "",
    city: "",
    state: "",
    pinCode: "",
    accType: "",
    pan: "",
    aadhar: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Log form data to check values
    console.log('Form Data:', formData);
  
    // Combine PIN code, PAN number, Aadhar number inputs
    const { pinPart1, pinPart2, pinPart3, pinPart4, pinPart5, pinPart6 } = formData;
    const pinCode = `${pinPart1}${pinPart2}${pinPart3}${pinPart4}${pinPart5}${pinPart6}`;
    
    const panNumber = `${formData.panPart1}${formData.panPart2}${formData.panPart3}${formData.panPart4}${formData.panPart5}${formData.panPart6}${formData.panPart7}${formData.panPart8}${formData.panPart9}${formData.panPart10}`;
    
    const aadharNumber = `${formData.aadharPart1}${formData.aadharPart2}${formData.aadharPart3}`;
  
   
  
    // Construct the final postData object, including all fields
    const postData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      dob: formData.dob,
      gender: formData.gender,
      address: {
        flatNo: formData.flatNo,
        streetName: formData.streetName,
        city: formData.city,
        state: formData.state,
        pinCode,  // Including the formatted PIN code
      },
      accNum: formData.accNum,  // If you have this value
      accType: formData.accType,  // Ensuring this field is properly mapped
      pan: panNumber,  // Include the full PAN number
      aadhar: aadharNumber,  // Include the full Aadhar number
    };
  
    // Log postData to check the final object
    console.log('Post Data to Submit:', postData);
  
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");
  
    if (!token) {
      alert("Token not found, please log in again.");
      return;
    }
    

// const decodedToken = jwt.decode(token);
// console.log(decodedToken);

  
    // Use fetch to send data with the token in the Authorization header
    fetch("http://localhost:8081/acc/createAcc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include the token here
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Account created successfully:", data);
      })
      .catch((error) => {
        console.error("Error creating account:", error);
      });
  };
  
  
  return (
    <div className="form-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-column">
            {/* First Name Field */}
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
  
            {/* Last Name Field */}
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
  
            {/* Phone Number Field */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Number"
                maxLength="10"
              />
            </div>
  
            {/* Date of Birth Field */}
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
  
            {/* Gender Dropdown */}
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Do not wish to Disclose</option>
              </select>
            </div>
  
            {/* Flat No Field */}
            <div className="form-group">
              <label htmlFor="flatNo">Flat No.</label>
              <input
                type="text"
                id="flatNo"
                value={formData.flatNo}
                onChange={handleChange}
                placeholder="Flat No."
              />
            </div>
  
            {/* Street Name Field */}
            <div className="form-group">
              <label htmlFor="streetName">Street Name</label>
              <input
                type="text"
                id="streetName"
                value={formData.streetName}
                onChange={handleChange}
                placeholder="Street Name"
              />
            </div>
          </div>
  
          <div className="form-column">
            {/* City Field */}
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />
            </div>
  
            {/* State Field */}
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
              />
            </div>
  
            {/* PIN Code Fields */}
            <div className="form-group">
              <label htmlFor="pinCode">PIN Code</label>
              <div className="input-group">
                <input
                  type="text"
                  id="pinPart1"
                  maxLength="1"
                  value={formData.pinPart1}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="pinPart2"
                  maxLength="1"
                  value={formData.pinPart2}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="pinPart3"
                  maxLength="1"
                  value={formData.pinPart3}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="pinPart4"
                  maxLength="1"
                  value={formData.pinPart4}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="pinPart5"
                  maxLength="1"
                  value={formData.pinPart5}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="pinPart6"
                  maxLength="1"
                  value={formData.pinPart6}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Account Type Dropdown */}
            <div className="form-group">
              <label htmlFor="accType">Account Type</label>
              <select
                id="accType"
                value={formData.accType} // Bind value to accType
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Savings">Savings</option>
                <option value="Current">Current</option>
              </select>
            </div>
  
            {/* PAN Number Fields */}
            <div className="form-group">
              <label htmlFor="panNumber">PAN Number</label>
              <div className="input-group">
                <input
                  type="text"
                  id="panPart1"
                  placeholder="A"
                  maxLength="1"
                  value={formData.panPart1}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="panPart2"
                  placeholder="B"
                  maxLength="1"
                  value={formData.panPart2}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="panPart3"
                  placeholder="C"
                  maxLength="1"
                  value={formData.panPart3}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="panPart4"
                  placeholder="D"
                  maxLength="1"
                  value={formData.panPart4}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="panPart5"
                  placeholder="E"
                  maxLength="1"
                  value={formData.panPart5}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="panPart6"
                  placeholder="1"
                  maxLength="1"
                  value={formData.panPart6}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="panPart7"
                  placeholder="2"
                  maxLength="1"
                  value={formData.panPart7}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="panPart8"
                  placeholder="3"
                  maxLength="1"
                  value={formData.panPart8}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="panPart9"
                  placeholder="4"
                  maxLength="1"
                  value={formData.panPart9}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="panPart10"
                  placeholder="F"
                  maxLength="1"
                  value={formData.panPart10}
                  onChange={handleChange}
                />
              </div>
            </div>
  
            {/* Aadhar Number Fields */}
            <div className="form-group">
              <label htmlFor="aadharNumber">Aadhar Number</label>
              <div className="input-group">
                <input
                  type="text"
                  id="aadharPart1"
                  placeholder="1234"
                  maxLength="4"
                  value={formData.aadharPart1}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="aadharPart2"
                  placeholder="5678"
                  maxLength="4"
                  value={formData.aadharPart2}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="aadharPart3"
                  placeholder="9012"
                  maxLength="4"
                  value={formData.aadharPart3}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
  
        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
  
};

export default CreateAcc
