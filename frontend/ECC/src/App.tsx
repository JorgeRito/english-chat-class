// import TopBanner from "./components/TopBanner/TopBanner";
// import {ContentCard} from "./components/ContentCard/ContentCard";
import "../src/components/ContentCard/ContentCard.css";
// import {useRef} from "react";
import {Hero} from "./components/Hero/Hero";
import {Cursos} from "./components/Cursos/Cursor";
import {Horarios} from "./components/Horarios/Horarios";
import {Testimonios} from "./components/Testimonios/Testimonios";
import {Contacto} from "./components/Contacto/Contacto";
import {Header} from "./components/Header/Header";
import { WeeklySchedule } from "./components/WeeklySchedule/WeeklySchedule";
function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Cursos />
      <Horarios />
      <WeeklySchedule />
      <Testimonios />
      <Contacto />
    </div>
  );
}

export default App;
