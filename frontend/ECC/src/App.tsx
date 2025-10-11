import TopBanner from "./components/TopBanner/TopBanner";
import { ContentCard } from "./components/ContentCard/ContentCard";
import "../src/components/ContentCard/ContentCard.css"
import React, { useRef } from "react";
// {ref}:{ref:React.RefObject<HTMLDivElement | null>}
export const handleScrollToSection = (ref:React.RefObject<HTMLDivElement | null>) => {
  if(ref?.current){
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
};
function App() {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const ref4 = useRef<HTMLDivElement | null>(null);
  const refs = [
    ref1,
    ref2,
    ref3,
    ref4,
  ]

  const info = [
    {
      title: "Bienvenido",
      content: "Breve bienvenida al usuario",
      className: "left",
      img: ""
    },
    {
      title: "¿Quienes somos?",
      content: "Informacion general",
      className: "right",
      img: ""
    },
    {
      title: "Conoce al equipo",
      content: "Introduccion breve sobre profesores",
      className: "left",
      img: ""
    },
    {
      title: "Contáctanos",
      content: "Informacion de contacto, tanto redes como numero telefonico",
      className: "right",
      img: ""
    },
  ];

  return (
    <main>
      <TopBanner temp={refs}/>
      {info.map((item) => (
        <div ref={refs[info.indexOf(item)]} className="section" key={info.indexOf(item)}>
          <ContentCard
            className={item.className}
            title={item.title}
            content={item.content}
            img=""
          />
        </div>
      ))}
    </main>
  );
}

export default App;
