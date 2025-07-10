import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import MainLayouts from './Components/LayOuts/MainLayouts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
