import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './Pages/HomePage'
import ErrorPage from "./Pages/ErrorPage"
import ServicesPage from './Pages/ServicesPage'
import PricesPage from './Pages/PricesPage'
import AdvantagePage from './Pages/AdvantagePage'
import ProductPage from './Pages/ProductPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/water_chanel/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/water_chanel/services/",
    element: <ServicesPage />,
  },
  {
    path: "/water_chanel/prices/",
    element: <PricesPage />,
  },
  {
    path: "/water_chanel/advantage/",
    element: <AdvantagePage />,
  },
  {
    path: "/water_chanel/prices/:id",
    element: <ProductPage />,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
