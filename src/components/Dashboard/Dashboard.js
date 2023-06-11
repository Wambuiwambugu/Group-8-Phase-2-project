import React, { useEffect, useState ,PureComponent} from 'react';
import dbData from './db.json'
import Chart from "./Chart"
import Select from 'react-select'


const Dashboard = ({userData}) => {
    const user = dbData.users[0];
    const activities = dbData.users[0].dailyActivities;
    const [selectedActivity, setSelectedActivity] = useState(null);


    const options = [
      { label: 'Walking', value: 'walking' },
      { label: 'Sleep', value: 'sleep' },
      { label: 'Water Intake', value: 'waterIntake' },
      { label:'Work Out Time', value:'workoutTime' }
    ]


    const handleSelectChange = (e)=>{
      
      setSelectedActivity(e.value)
      console.log(selectedActivity)
    }
    
    return (
        <div className="flex justify-center">
          {/* Sidebar */}
          <div className="w-1/3 bg-gray-800 text-white p-4 h-screen">
            <div className="flex justify-center mb-4">
                <div className="w-fit h-fit  items-center">
                <img
                className=" h-25 w-20 rounded-full"
                src='https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg'
                alt="User Avatar"
              />
                </div>
              <h3 className="block ml-2 p-4 text-3xl font-bold ">{user.name}</h3>
            </div>
            <ul>
              <li className="mb-2">
                {/* <Link
                  to="/goals"
                  className="text-blue-500 hover:text-blue-700"
                > */}
                  Goals
                {/* </Link> */}
              </li>
              <li>
                {/* <Link
                  to="/activities"
                  className="text-blue-500 hover:text-blue-700"
                > */}
                  Activities
                {/* </Link> */}
              </li>
            </ul>
          </div>
    
          {/* Main Content */}
          <div className="p-4 h-screen w-full items-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h1>
    
            <h2 className="text-xl font-bold mb-2">Health Goals</h2>
            {/* <GoalList goals={goals} /> */}
            
    
            <h3 className="text-xl font-bold mb-2">Health Achievements</h3>

            <Select options={options} placeholder="Select to view activity" onChange={handleSelectChange}/>
            
            {selectedActivity !== null ? 
            <>
              <Chart activities={activities} chartType={selectedActivity}/>
            </> :
            
            <>

            </>}
            
  
            
          </div>
        </div>
      );
    };
    

  

export default Dashboard;
