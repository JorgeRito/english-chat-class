import "../src/components/ContentCard/ContentCard.css";
import {Hero} from "./components/Hero/Hero";
import {Cursos} from "./components/Cursos/Cursor";
import {Horarios} from "./components/Horarios/Horarios";
import {Testimonios} from "./components/Testimonios/Testimonios";
import {Contacto} from "./components/Contacto/Contacto";
import {Header} from "./components/Header/Header";
import { WeeklySchedule } from "./components/WeeklySchedule/WeeklySchedule";
import { CreateUserForm } from "./components/CreateStudent";
import { Scheduler } from "./components/Scheduler/Scheduler";
function App() {
  return (
    <div className="container">
      <CreateUserForm/> 
      <Header />
      <Hero />
      <Cursos />
      <Horarios />
      <Scheduler/>
      <WeeklySchedule />
      <Testimonios />
      <Contacto />
    </div>
  );
}

export default App;
