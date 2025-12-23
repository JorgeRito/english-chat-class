import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
// import './index.css'
import "./NewLayout.css";
import App from "./App.tsx";
import { CreateUserForm } from "./components/CreateStudent/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CreateUserForm/>
    <App />
  </StrictMode>
);
