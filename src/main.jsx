import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import State from './Components/State/State.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import ProductCard from './Components/ProductCard/ProductCard.jsx'
import Card from './Components/Card/Card.jsx'
import Detail from './Components/Detail/Detail.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Wish from './Components/Wish/Wish.jsx'
import Contuct from './Components/Contuct/Contuct.jsx'
import Error from './Components/Error/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <ProductCard></ProductCard>,
            loader: ()=> fetch('../data.json')
          },
          {
            path: '/category/:id',
            element: <ProductCard></ProductCard>,
            loader: ()=> fetch('../data.json')
          }
        ]
      },
      {
        path: '/state',
        element: <State></State>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/wish',
            element: <Wish></Wish>,
          },
          {
            path: '/dashboard/cart',
            element: <Cart></Cart>
          }
        ]
      },
      {
        path: '/card',
        element: <Card></Card>
      },
      {
        path: '/product/:productId',
        element: <Detail></Detail>,
        loader: ()=> fetch('../data.json'),
      },
      {
        path: '/contuct',
       element: <Contuct></Contuct>,
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
