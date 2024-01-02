import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Admin from '../src/components/admin/Admin'
import User from './components/user/User.jsx'
import Services from './components/services/Services.jsx'
import Meetings from './components/meetings/Meetings.jsx'
import AdminLogin from './components/admin-login/AdminLogin.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
    errorElement: <div>error</div>,
  },
  {
    path: '/admin',
    element: <AdminLogin />,
    errorElement: <div>error</div>,
    children:[
      {
        path:'services',
        element:<Services/>,
        errorElement:<div>error</div>,
      },
      {
        path:':meetings',
        element:<Meetings/>,
        errorElement:<div>error</div>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
