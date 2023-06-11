// LoginSignup.js

import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = (props) => {
  const {
    isLogin,
    setIsLogin,
    currentUser,
    error,
    setError,
    handleLogin,
    handleSignup,
    goBack
  } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      handleLogin(email, password);
    } else {
      handleSignup(name, email, password, confirmPassword);
    }

    clearInputFields(); // Clear input fields after login or signup
  };

  const clearInputFields = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="wrapper">
          <div className="title-text">
            {isLogin ? (
              <div className={`title ${isLogin ? "" : "slide"}`}>Log In</div>
            ) : (
              <div className={`title ${isLogin ? "slide" : ""}`}>Sign Up</div>
            )}
          </div>
          <div className="form-container">
            <div className="form-inner">
              <form onSubmit={handleSubmit} className={isLogin ? "" : "slide"}>
                {!isLogin && (
                  <div className="field">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-field"
                      placeholder="Name"
                    />
                  </div>
                )}

                <div className="field">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                    placeholder="Email"
                  />
                </div>

                <div className="field">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                    placeholder="Password"
                  />
                </div>

                {!isLogin && (
                  <div className="field">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="input-field"
                      placeholder="Confirm Password"
                    />
                  </div>
                )}

                <div className="field">
                  <div className="error">{error}</div>
                  {currentUser && (
                    <div className="success">
                      Logged in as {currentUser.name}!
                    </div>
                  )}
                  <button type="submit" className="submit-btn">
                    {isLogin ? "Log In" : "Sign Up"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="toggle-link">
            {isLogin ? (
              <div>
                Don't have an account?{" "}
                <span
                  onClick={() => {
                    setIsLogin(false);
                    clearInputFields();
                  }}
                  className="link"
                >
                  Sign Up
                </span>
              </div>
            ) : (
              <div>
                Already have an account?
                <span
                  onClick={() => {
                    setIsLogin(true);
                    clearInputFields();
                  }}
                  className="link"
                >
                  Log In
                </span>
                <button onClick={goBack}>Go Back</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;