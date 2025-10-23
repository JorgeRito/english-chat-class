import "./TopBanner.css";
import NavBar from "../NavBar/CustomButton/NavBar";

export default function TopBanner({
  temp
}: {
  temp: React.RefObject<HTMLDivElement | null>[];
}) {
  return (
    <>
      <div className="top-banner">
        <div className="logo-container">
          <img src="/english-chat-class/ecc_logo.png" />
        </div>
        <div className="text-container">
          <label className="top-banner-text">
            <b>English Chat Class</b>
          </label>
          <div className="quote">
            <label>¡Habla Inglés desde donde estés!</label>
          </div>
        </div>
      </div>

      <NavBar temp={temp} />
    </>
  );
}
