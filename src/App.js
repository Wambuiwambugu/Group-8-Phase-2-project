import Landingpage from './Components/Landingpage/Landingpage';
import Header from './Components/Landingpage/Header';
import ActivitiesContainer from './Components/Activities/ActivitiesContainer'
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import LoginSignup from './Components/Login/LoginSignup';

function App() {
  const [userData, setUserData] = useState([]);
  const baseUrl =
    "https://my-json-server.typicode.com/Wambuiwambugu/Group-8-REST-API/users";

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
   console.log(userData);


  return (
    <div className="App">

    <Header/>
       <Landingpage/>
       {userData.length > 0 ? <Dashboard userData={userData} /> : <p>Loading...</p>}
      <ActivitiesContainer />
      <LoginSignup />

      welcome to App! development
    </div>
  );
}

export default App;
