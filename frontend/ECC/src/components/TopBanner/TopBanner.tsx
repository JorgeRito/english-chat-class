import "./TopBanner.css";
import NavBar from "../NavBar/CustomButton/NavBar";

export default function TopBanner() {
  return (
    <>
      <div className="top-banner">
        <div style={{display: 'flex', justifyContent: "center"}}>
        <img className="logo" src={"frontend/ECC/src/assets/ECC_Logo.jpg"} alt="Image not loading"/>
        <div>
          <label className="top-banner-text">
            <b>English Chat Class</b>
          </label>
          <div>
            <label className="quote">¡Habla Inglés sin salir de casa!</label>
          </div>
        </div>
        </div>
      </div>

      <NavBar />
    </>
  );
}
