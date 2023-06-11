import React, { useState, useEffect } from "react";
import AddDailyActivity from "./AddDailyActivities";
import ActivityList from "./ActivityList";
import { v4 as uuidv4 } from "uuid";

function ActivitiesContainer({ currentUser, baseUrl }) {
  const [userData, setUserData] = useState({ dailyActivities: [] });
  const [formData, setFormData] = useState({
    date: "",
    walking: "",
    workout: "",
    waterintake: "",
    sleep: "",
  });

  useEffect(() => {
    if (currentUser) {
      setUserData(currentUser);
    }
  }, [currentUser]);

  const generateUniqueId = () => {
    return uuidv4();
  };

  const activityToPost = {
    id: generateUniqueId(),
    date: formData.date,
    walking: formData.walking,
    sleep: formData.sleep,
    waterIntake: formData.waterintake,
    workoutTime: formData.workout,
  };

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const postUserActivities = function () {
    const updatedActivities = [...userData.dailyActivities, activityToPost];
    const updatedUserData = { ...userData, dailyActivities: updatedActivities };

    fetch(`${baseUrl}/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((data) => {
        setUserData(data); // Update userData with the response data
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    postUserActivities();
    setFormData({
      date: "",
      walking: "",
      workout: "",
      waterintake: "",
      sleep: "",
    });
  };

  const deleteActivityHandler = (id) => {
    const updatedActivities = userData.dailyActivities.filter(
      (activity) => activity.id !== id
    );
    const updatedUserData = { ...userData, dailyActivities: updatedActivities };

    fetch(`${baseUrl}/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((data) => {
        setUserData(data); // Update userData with the response data
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="min-h-screen min-w-full pt-5 bg-blue-200">
      <AddDailyActivity
        formData={formData}
        changeHandler={onChangeHandler}
        submitHandler={onSubmitHandler}
      />

      <ActivityList
        userActivities={userData.dailyActivities}
        deleteActivity={deleteActivityHandler}
      />
    </div>
  );
}

export default ActivitiesContainer;
