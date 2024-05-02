import React from 'react';
import './Form.css'; 
function Signup() {
  return (
    <div className="sign-up-box">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="text" placeholder="Name" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Re-Enter Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default Signup;