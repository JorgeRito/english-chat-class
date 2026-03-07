import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
// import './index.css'
import "./NewLayout.css";
import PublicSite from "./App.tsx";
// import * as dotenv from "dotenv";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PublicSite />
  </StrictMode>
);
