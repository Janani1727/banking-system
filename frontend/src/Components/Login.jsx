import axios from "axios";
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("All fields are required.");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:8081/users/login",
        formData
      );
      alert(data.message || "Login successful!");
      let token = data.token;
      console.log(token);
      localStorage.setItem("token", token);
    } catch (err) {
      if (err.response && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("An error occurred. Please try again later.");
      }
      console.error(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={(e) => handleChange(e)} className="login-form">
        <input
          type="email"
          value={formData.email}
          name="email"
          placeholder="Enter your email address"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="form-input"
        />
        <input
          type="password"
          value={formData.password}
          name="password"
          placeholder="Enter your password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="form-input"
        />
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
