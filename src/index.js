 import React from 'react';

 import ReactDOM from 'react-dom/client';
 import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 import './index.css';
 import App from './App';
 import LoginSignup from './components/Login/LoginSignup';
 import Dashboard from "./components/Dashboard/Dashboard";
 import AddDailyActivity from "./components/Activities/AddDailyActivities";
 
 
 const router = createBrowserRouter (
   [{ path: '/', element:<App/>},
   { path: '/dashboard', element:<Dashboard/>},
   { path: '/healthgoals', element:<App/>},
   { path: '/dailyactivity', element:<AddDailyActivity/>},
   { path: '/login', element:<LoginSignup/>},
 ]
 )
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
     <RouterProvider router={router}/>
   </React.StrictMode>
 );
 // If you want to start measuring performance in your app, pass a function
 // to log results (for example: reportWebVitals(console.log))
 // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 