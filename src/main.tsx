import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./NewLayout.css";
import PublicSite from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {CreateUserForm} from "./components/CreateStudent/index.tsx";
import { ExersicesSite } from "./components/ExercisesSite/ExercisesSite.tsx";
import { AddExercise } from "./components/AddExercise/index.tsx";

const router = createBrowserRouter([
  {path : '/', element: <PublicSite/>},
  {path : `/dashboard`, element: <CreateUserForm/>},
  {path: `/exercises`, element: <ExersicesSite/>},
  {path: `/add`, element: <AddExercise/>}
])
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
