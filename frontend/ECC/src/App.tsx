import TopBanner from "./components/TopBanner/TopBanner";
import {ContentCard} from "./components/ContentCard/ContentCard";
import "../src/components/ContentCard/ContentCard.css";
import {useRef} from "react";
// {ref}:{ref:React.RefObject<HTMLDivElement | null>}
// export const handleScrollToSection = (ref:React.RefObject<HTMLDivElement | null>) => {
//   if(ref?.current){
//     ref.current.scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     })
//   }
// };
function App() {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const ref4 = useRef<HTMLDivElement | null>(null);
  const refs = [ref1, ref2, ref3, ref4];

  const info = [
    {
      title: "Bienvenido",
      content:
        "Bienvenido a English Chat Class, el espacio donde aprender inglés se convierte en una experiencia dinámica, práctica y enfocada en la conversación real. Nuestras clases en vivo te permitirán mejorar tu fluidez, comprensión y confianza al hablar, con la guía de profesores calificados y un ambiente interactivo que se adapta a tu ritmo y objetivos personales. Aprende inglés desde cualquier lugar y conéctate con personas que, como tú, buscan avanzar profesional y personalmente a través del idioma.",
      content2: [],
      className: "left",
      img: "english-chat-class/opportunities.jpg"
    },
    {
      title: "¿Quienes somos?",
      content:
        "Somos una escuela de inglés 100% en línea especializada en clases en vivo. Creemos que la mejor forma de dominar un idioma es a través de la práctica constante y la interacción real. Nuestro método se centra en la comunicación efectiva: no solo aprenderás gramática o vocabulario, sino que desarrollarás la habilidad de pensar y expresarte en inglés con naturalidad.",
      content2: [],
      className: "right",
      img: "english-chat-class/teacher.png"
    },
    {
      title: "Conoce al equipo",
      content:
        "Nuestro equipo está formado por profesores certificados y con amplia experiencia en la enseñanza del inglés a estudiantes de distintos niveles y contextos. Cada miembro de English Chat Class comparte un mismo objetivo: ayudarte a alcanzar la confianza necesaria para comunicarte en inglés en cualquier situación. Más que maestros, somos mentores y compañeros de aprendizaje que te guiarán con paciencia, motivación y estrategias prácticas adaptadas a tus necesidades.",
      content2: [],
      className: "left",
      img: "english-chat-class/class.png"
    }
  ];

  return (
    <main>
      <TopBanner temp={refs} />
      {info.map((item) => (
        <div
          ref={refs[info.indexOf(item)]}
          className="section"
          key={info.indexOf(item)}
        >
          <ContentCard
            className={item.className} //Si cambio esta clase (right o left) puedo modificar el acomodo de la imagen y el contenedor de texto
            title={item.title}
            content={item.content}
            content2={item.content2}
            img={item.img}
          />
        </div>
      ))}
      <div className="section" ref={ref4}>
        <div className="right">
          <div className="info-container">
            <h1>Contáctanos</h1>
            <p>
              ¿Tienes dudas o quieres comenzar tu experiencia con nosotros?
              Escríbenos y te ayudaremos a elegir el programa que mejor se
              adapte a ti.
            </p>
            <p>Teléfono: 3351054147</p>
            <p>
              <a href="https://www.instagram.com/english_chat_class/">
                Instagram
              </a>
            </p>
          </div>
          <div className="img-container">
            <img src="https://scontent.cdninstagram.com/v/t51.82787-15/539788976_17852034603533292_7395076011169272515_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzcwNzQ0OTYwNTE3ODk2NjY3NQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=LaSo-XziUdEQ7kNvwGA83nB&_nc_oc=Adnn-TXBzBi2oEcrzkKi2T1SAmAHxa7n9QnWBsQUtUsR3BYeLQts4NA4ZjZYSZRjBug&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=IbO-CJ_ELcxGgdfAZ8RIwg&oh=00_AfeOW3VN9b2N4Ez43HiH1CHw7q3zNj-ptsei-Gb3qw8GCg&oe=68F48ED9"></img>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
