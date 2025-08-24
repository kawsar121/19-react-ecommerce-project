import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import MainLayouts from './Components/LayOuts/MainLayouts.jsx';
import Register from './Components/Pages/Register.jsx';
import Login from './Components/Pages/Login.jsx';
import ViewPage from './Components/Pages/ViewPage.jsx';
import Drawer from './Components/Theme/Drawer.jsx';
import View from './Components/Theme/View.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
  },
  {
    path: "register",
    element: <Register></Register>
  },
  {
    path: "login",
    element: <Login></Login>
  },
  {
    path: "/drawer",
    element: <Drawer></Drawer>
  },
  {
    path: "/view",
    element: <View></View>
  }
  // {
  //   path: "/viewPage",
  //   element: <ViewPage></ViewPage>
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
