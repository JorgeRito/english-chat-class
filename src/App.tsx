import "../src/components/ContentCard/ContentCard.css";
import {Hero} from "./components/Hero/Hero";
import {Cursos} from "./components/Cursos/Cursor";
import {Horarios} from "./components/Horarios/Horarios";
import {Testimonios} from "./components/Testimonios/Testimonios";
import {Contacto} from "./components/Contacto/Contacto";
import {Header} from "./components/Header/Header";
function PublicSite() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Cursos />
      <Horarios />
      <Testimonios />
      <Contacto />
    </div>
  );
}

export default PublicSite;
