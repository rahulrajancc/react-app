import React from 'react';
// import ReactDOM from 'react-dom/client';

import './index.css';
import Topbar from './componets/Topbar/topbar';
import Message from './page/Message_chats/message';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/home';
import app from './firebase';
import Signup from './page/loginandsignup/signup';
import Login from './page/loginandsignup/login';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path: '/message',
    element: <Message />,
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path:'/Signup',
    element:<Signup />
  },
  {
    path: '/Login',
  element:<Login />}
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);


