import React from 'react';
import './register.css';

function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">Connect with friends</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password again" className="loginInput" />
            <button className="loginButton">Register</button>
            <button className="loginRegisterButton">
              Login to existing account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
