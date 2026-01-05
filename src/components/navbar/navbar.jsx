import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="cbc-container">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Calvary Bible Church logo" />
            </a>
          </div>
          {/* Hamburger */}
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <ul className={`links ${open ? "open" : ""}`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="https://www.youtube.com/@CBCTRUELIFE" target="_blank">
                Sermons
              </a>
            </li>
            <li>
              <a href="mailto:cbctruelife@gmail.com">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
