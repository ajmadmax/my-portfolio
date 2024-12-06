import Image from "next/image";
import "../css/portfolioHome.css"


export default function PortfolioHome() {
  return (
    <div className="portfolio-container">
    <h1 className="title">Ajay Kumar Jella</h1>
    <p className="subtitle">Full-Stack Developer</p>
    <p className="description">
    "To be a coder is to embrace the perpetual journey of learning, where curiosity drives innovation and growth knows no bounds."
    </p>
    <div className="image-container">
      <img
        src="/assets/myProfilePic.jpg"
        alt="Ajay Kumar Jella"
        className="styled-image"
      />
    </div>
  </div>

  );
}