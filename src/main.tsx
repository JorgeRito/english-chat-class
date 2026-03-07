import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
// import './index.css'
import "./NewLayout.css";
import PublicSite from "./App.tsx";
import {Dashboard} from "./components/Dashboard/Dashboard.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {path : '/', element: <PublicSite/>},
  {path : '/dashboard', element: <Dashboard/>}
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <PublicSite /> */}
    {/* <Dashboard/> */}
  </StrictMode>
);
