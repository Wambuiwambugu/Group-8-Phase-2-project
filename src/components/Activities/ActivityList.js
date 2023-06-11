import React from "react";
// import "./Activity.css";
import DailyActivity from "./DailyActivity";

function ActivityList({ userActivities, deleteActivity }) {
  console.log(userActivities);
  
  // console.log(userData);
  return (
    <div className="flex justify-center bg-gray-700 max-w-7xl mx-auto max-h-screen">
      <table className="w-full text-white">
        <thead>
          <tr className="bg-gray-800 text-base font-bold">
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Walking</th>
            <th className="py-2 px-4">WorkOut</th>
            <th className="py-2 px-4">Water intake</th>
            <th className="py-2 px-4 ">Sleep Duration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Render activity rows here */}
          {userActivities.map((activity) => (
            <DailyActivity
              key={activity.id}
              activity={activity}
              deleteActivity={deleteActivity}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActivityList;
