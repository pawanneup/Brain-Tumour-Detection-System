import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Loginpage from './Components/Loginpage/Loginpage.jsx'
import PatientDashboard from './Components/PatientDashboard/PatientDashboard.jsx'
import DoctorDashboard from './Components/DoctorDashboard/DoctorDashboard.jsx'
const router= createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element:<Home/>
      },
       {
        path:"Loginpage",
        element:<Loginpage/>
      },
      {
        path:"PatientDashboard",
        element: <PatientDashboard/>
      },
      {
        path:"DoctorDashboard",
        element:<DoctorDashboard/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
