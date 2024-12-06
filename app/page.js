import Image from "next/image";
import styles from "./page.module.css";
import PortfolioHome from "./portfolio/portfolioHome";
import Navbar from "./portfolio/navbar";
import "./css/page.css"

export default function Home() {
  return (
    <div className="full-page">
      <Navbar/>
      <PortfolioHome/>
    </div>
  );
}
