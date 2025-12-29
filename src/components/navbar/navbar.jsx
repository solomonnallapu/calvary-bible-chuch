import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img
            src="../src/assets/images/logo.jpeg"
            alt="Calvary Bible Church logo "
          />
        </a>
      </div>
      <ul className="links">
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
    </nav>
  );
};
export default Navbar;
