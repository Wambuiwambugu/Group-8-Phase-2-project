import React from "react";

function DailyActivity({ activity, deleteActivity }) {
  // const activity = user; // Access the first activity in the array
  const { id, date, sleep, walking, workoutTime, waterIntake } = activity;
  // console.log(date);
  
  return (
    <tr>
      <td className="py-2 px-4 text-center">{date}</td>
      <td className="py-2 px-4 text-center">{walking}</td>
      <td className="py-2 px-4 text-center">{workoutTime}</td>
      <td className="py-2 px-4 text-center">{waterIntake}</td>
      <td className="py-2 px-4 text-center">{sleep}</td>
      <td className="py-2 px-4">
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={()=>deleteActivity(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default DailyActivity;