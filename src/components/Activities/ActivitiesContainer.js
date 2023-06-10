import React, { useState, useEffect } from "react";
import AddDailyActivity from "./AddDailyActivities";
import ActivityList from "./ActivityList";

function ActivitiesContainer({ currentUser, baseUrl }) {

  const [userData, setUserData] = useState([]);
  const [updateActivity, setUpdateActivity]=useState([])
  // const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    date: "",
    walking: "",
    workout: "",
    waterintake: "",
    sleep: "",
  });

  useEffect(() => {
    if (currentUser) {
      setUserData([currentUser]);
    }
  }, [currentUser]);

  const activityToPost = {
    date: formData.date,
    walking: formData.walking,
    sleep: formData.sleep,
    waterIntake: formData.waterintake,
    workoutTime: formData.workout,
  };

  const dailyActivities = currentUser.dailyActivities;



  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  


  const postUserActivities = function () {
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activityToPost),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((data) => {
        setUpdateActivity(...userData, data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    postUserActivities();
  
  };

  const deleteActivityHandler = (id) => {
    console.log("This has been deleted", id);
  };

  

  return (
    <div className="min-h-screen min-w-full pt-5 bg-blue-200">
      <AddDailyActivity
        formData={formData}
        changeHandler={onChangeHandler}
        submitHandler={onSubmitHandler}
      />

      <ActivityList
        dailyActivities={dailyActivities}
        deleteActivity={deleteActivityHandler}
      />
    </div>
  );
}

export default ActivitiesContainer;
