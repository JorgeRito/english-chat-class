import "./TopBanner.css";
import NavBar from "../NavBar/CustomButton/NavBar";

export default function TopBanner(
  {temp}:{temp:React.RefObject<HTMLDivElement | null>[]}
) {
  return (
    <>
      <div className="top-banner">
        <div className="logo-container">
          <img src="ecc_logo.jpg" />
        </div>
        <div>
          <label className="top-banner-text">
            <b>English Chat Class</b>
          </label>
          <div>
            <label className="quote">¡Habla Inglés sin salir de casa!</label>
          </div>
        </div>
      </div>

      <NavBar temp={temp}/>
    </>
  );
}
