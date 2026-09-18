// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import App from './router/App.jsx'
// import Home from './router/home.jsx'
// import Bag from './router/Bag.jsx'
// import {Provider} from 'react-redux'
// import mintrastore from './store/index.js'
// const router= createBrowserRouter([
//   {path:'/', element:<App/>, children:[
//     {path:'/' , element:<Home/>},
//     {path:'/bag', element:<Bag/>}
//   ]}

// ])
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={mintrastore}>
//    <RouterProvider router={router}/>
//    </Provider>
//   </StrictMode>,
// )

// this code is only adding animation effect motions etc otherwise the fuctionality is same as upper one

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./router/App.jsx";
import Home from "./router/home.jsx";
import Bag from "./router/Bag.jsx";

import { Provider } from "react-redux";
// import mintrastore from "./store/index.js";
import mintrastore from "./store/index.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={mintrastore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);