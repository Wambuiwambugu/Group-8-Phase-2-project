import LoginSignup from "./components/Login/LoginSignup";
import ActivitiesContainer from "./components/Activities/ActivitiesContainer";
import React, { useState, useEffect } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState([]);
  const baseUrl = "http://localhost:3000/users";

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

        // if (data.length > 0) {
        //   console.log("Logged in successfully!");
        //   setCurrentUser(data);
        //   setError("");
        //   clearInputFields();
        // } else {
        //   setError("Wrong email or password!");
        // }
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
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        setError("An error occurred while signing up. Please try again later.");
      });
  };

  const clearInputFields = () => {
    setIsLogin(false);
    setCurrentUser(null);
    setError("");
    setUserData([]);
  };

  return (
    <div>
      {console.log(userData, currentUser)}
      {!currentUser ? (
        <LoginSignup
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          currentUser={currentUser}
          error={error}
          setError={setError}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          userData={userData}
        />
      ) : (
        <ActivitiesContainer
          currentUser={currentUser}
          // handleLogout={handleLogout}
        />
      )}
      {/* Uncomment the components you want to render */}
      {/* <ActivitiesContainer currentUser={currentUser} /> */}
      {/* <HealthGoals /> */}
      {/* <Header /> */}
      {/* <Landingpage /> */}
      {/* Render the LoginSignup component conditionally */}
      {/* 
      <LoginSignup
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        currentUser={currentUser}
        error={error}
        setError={setError}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        userData={userData}
      />
      {currentUser && <ActivitiesContainer currentUser={currentUser} />}
      {currentUser ? (
        <ActivitiesContainer currentUser={currentUser} />
      ) : (
        
      )} */}
    </div>
  );
}

export default App;
