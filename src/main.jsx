import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Skill from "./components/Skill.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './layout/Main.jsx';
import Home from './components/Home.jsx';
import Education from './components/Education.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/skills',
        element:<Skill></Skill>
      },
      {
        path:'/projects',
        element:<Projects></Projects>
      },
      {
        path:'/education',
        element:<Education></Education>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' lg:max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
