import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    try {
      await axios.post("http://localhost:3001/current_user", formData);
      alert("You are logged in");
      // You can handle successful login here, such as redirecting the user
    } catch (error) {
      console.error("Login failed:", error);
      // You can handle login failure here, such as displaying an error message
    }
  };

  return (
    <Grid container sm={12} sx={{display:'flex',justifyContent:'center',alignItems:'center', margin:'30px 0 30px 0'}}>
    <div className="login-box">
      <h1>Login</h1>
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
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">
          <Link to="/" style={{textDecoration:'none',color:'white'}}>
              Login
          </Link>
          </button>
      </form>
    </div>
    </Grid>
  );
}

export default Login;