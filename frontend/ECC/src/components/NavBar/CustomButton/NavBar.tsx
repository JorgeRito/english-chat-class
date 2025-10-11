import { useState } from "react";
import "./navBar.css";
import { handleScrollToSection } from "../../../App";
const options: string[] = [
  // "INICIO",
  "QUIENES SOMOS",
  "TESTIMONIOS",
  "CONÓCENOS",
  "CONTÁCTANOS",
];

export default function NavBar(
  {temp}:{temp:React.RefObject<HTMLDivElement | null>[]}
) {
const [menuState, setMenuState] = useState(false)

  return (
    // Compress
    <>
      <div
        onClick={() => setMenuState(!menuState)}
        className="menu-toggle"
        id="menu-toggle"
      >
        ☰
      </div>
      <div className={`nav-bar ${menuState ? "show" : ""}`}>
        {options.map((option) => (
          <div key={options.indexOf(option)}>
            <button
              className={`nav-links`}
              onClick={() =>
                handleScrollToSection(temp[options.indexOf(option)])
              }
            >
              {option}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
