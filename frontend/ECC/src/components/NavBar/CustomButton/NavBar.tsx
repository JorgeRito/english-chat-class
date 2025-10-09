import CustomButton from "./CustomButton";
import "./navBar.css";
const options: string[] = [
  "INICIO",
  "QUIENES SOMOS",
  "EXPERIENCIAS",
  "CONOCENOS",
  "CONTACTANOS",
];

export default function NavBar() {
  return (
    <div className="nav-bar">
      {options.map((option) => (
        <CustomButton key={options.indexOf(option)} content={option} />
      ))}
    </div>
  );
}
