import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from './Rootlayout.jsx';
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx';
import ProductsDetails from './Pages/ProductsDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
       { index: true, Component: Home },
       { path: "/ProductsDetails/:id", Component:ProductsDetails}
     
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
