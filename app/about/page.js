import Navbar from "../portfolio/navbar"; 
import PortfolioAbout from "../portfolio/portfolioAbout";
import "../css/page.css"

export default function About() {
  return (
    <div className="full-page">
      <Navbar />
      <PortfolioAbout />
    </div>
  );
}
