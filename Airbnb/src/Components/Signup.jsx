import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.reEnterPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:3001/users", {
        username: formData.username,
        name: formData.name,
        password: formData.password,
      });
      alert("User registered successfully");
    } catch (error) {
      console.error("There was an error registering the user!", error);
    }
  };

  return (
    <Grid container sm={12} sx={{display:'flex',justifyContent:'center',alignItems:'center', margin:'30px 0 30px 0'}}>
    <div className="sign-up-box">
      <h1>Welcome to Airbnb</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="reEnterPassword"
          placeholder="Re-Enter Password"
          value={formData.reEnterPassword}
          onChange={handleChange}
          required
        />
        <Link to="/login" style={{textDecoration:'none'}}>
          <button type="submit">Sign Up</button>
        </Link>
      </form>
    </div>
    </Grid>
  );
}

export default Signup;
