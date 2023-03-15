import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './Pages/HomePage'
import ErrorPage from "./Pages/ErrorPage"
import ServicesPage from './Pages/ServicesPage'
import PricesPage from './Pages/PricesPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "services/",
    element: <ServicesPage />,
  },
  {
    path: "prices/",
    element: <PricesPage />,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
