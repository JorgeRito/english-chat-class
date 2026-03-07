import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
// import './index.css'
import "./NewLayout.css";
import PublicSite from "./App.tsx";
// import * as dotenv from "dotenv";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {CreateUserForm} from "./components/CreateStudent/index.tsx";

const router = createBrowserRouter([
  {path : '/english-chat-class', element: <PublicSite/>},
  {path : '/english-chat-class/dashboard', element: <CreateUserForm/>}
])
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
