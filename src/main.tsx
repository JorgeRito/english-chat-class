import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./NewLayout.css";
import PublicSite from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {CreateUserForm} from "./components/CreateStudent/index.tsx";
import { ExersicesSite } from "./components/ExercisesSite/ExercisesSite.tsx";
const prefix = '/english-chat-class'

const router = createBrowserRouter([
  {path : prefix, element: <PublicSite/>},
  {path : `${prefix}/dashboard`, element: <CreateUserForm/>},
  {path: `${prefix}/exercises`, element: <ExersicesSite/>}
])
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
