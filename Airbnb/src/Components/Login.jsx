import React from 'react';
import './Form.css'; 

function Login() {
  return (
    <div className="box login-box">
      <h1>Login</h1>
      <form>
      <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="button">Login</button>
      </form>
    </div>
  );
}
export default Login;