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
const router = createBrowserRouter([
  {
    path: '/message',
    element: <Message />,
  },
  {
    path: '/home',
    element: <Home />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topbar />
    <RouterProvider router={router} />
    
    
    <Home />
  </React.StrictMode>
);


