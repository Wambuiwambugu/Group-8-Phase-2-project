import React, { useState, useEffect } from "react";
import LoginSignup from "./components/Login/LoginSignup";
import Header from "./components/Landingpage/Header";
import Landingpage from "./components/Landingpage/Landingpage";
import Dashboard from "./components/Dashboard/Dashboard";

import "./components/Landingpage/Landingpage.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState([]);
  const baseUrl = "http://localhost:8080/users";
  const [showLoginSignup, setShowLoginSignup] = useState(false);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((error) => {
        console.error("Error retrieving user data:", error);
        setError(
          "An error occurred while retrieving user data. Please try again later."
        );
      });
  }, []);

  const handleLogin = (email, password) => {
    fetch(`${baseUrl}?email=${email}&password=${password}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data[0]);
        setShowLoginSignup(false); // Redirect to dashboard
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setError("An error occurred while logging in. Please try again later.");
      });
  };

  const handleSignup = (name, email, password, confirmPassword) => {
    const existingUser = userData.find((user) => user.email === email);
    if (existingUser) {
      setError("User with the same email already exists");
      return;
    }

    if (password.length < 8) {
      setError("Password should be at least 8 characters long!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const newUser = {
      name: name,
      email: email,
      password: password,
      goals: {
        walking: 0,
        sleep: 0,
        waterIntake: 0,
        workoutTime: 0,
      },
      dailyActivities: [
        {
          id: 1,
          date: "",
          walking: 0,
          sleep: 0,
          waterIntake: 0,
          workoutTime: 0,
        },
      ],
    };

    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User signed up successfully!", data);
        clearInputFields();
        setError("");
        setCurrentUser(newUser); // Simulate successful signup
        setShowLoginSignup(false); // Redirect to dashboard
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        setError("An error occurred while signing up. Please try again later.");
      });
  };

  const clearInputFields = () => {
    // Clear input fields and reset state
    setIsLogin(false);
    setCurrentUser(null);
    setError("");
    setUserData([]);
  };

  const handleGetStarted = () => {
    setShowLoginSignup(true);
  };

  const handleGoBack = () => {
    setShowLoginSignup(false);
  };

  return (
    <div className="App">
      <Header />
      {showLoginSignup ? (
        <LoginSignup
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          currentUser={currentUser}
          error={error}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          goBack={handleGoBack}
          setError={setError}
        />
      ) : currentUser ? (
        <Dashboard userData={userData} />
      ) : (
        <Landingpage clickHandler={handleGetStarted} />
      )}
    </div>
  );
}

export default App;
