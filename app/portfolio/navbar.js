import Link from "next/link";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/worksamples" className="nav-link">
          Work Samples
          </Link>
        </li>
      </ul>
      <ul className="nav-right">
        <li className="nav-item">
          <Link href="/contactAj" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <a href="/assets/resume.pdf" className="nav-link" download="Ajay_Resume.pdf">
            <u>Resume</u>
          </a>
        </li>
      </ul>
    </nav>
  );
}
