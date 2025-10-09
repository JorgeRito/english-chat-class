import "./TopBanner.css";
import NavBar from "../NavBar/CustomButton/NavBar";
export default function TopBanner() {
  return (
    <>
      <div className="top-banner">
        <img src="" />
        <div>
          <label className="top-banner-text">
            <b>English Chat Class</b>
          </label>
          <div>
            <label className="quote">Lema de la escuela</label>
          </div>
        </div>
      </div>

      <NavBar />
    </>
  );
}
