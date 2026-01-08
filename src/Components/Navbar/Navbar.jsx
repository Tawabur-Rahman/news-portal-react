import { useContext, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import SearchBox from "./SearchBox";   // component import 

function Navbar() {
  const { category, setCategory, searchTerm, setSearchTerm } =
    useContext(StoreContext);
  const menuRef = useRef();

  const openMenu = () => (menuRef.current.style.right = "0");
  const closeMenu = () => (menuRef.current.style.right = "-100%");

  const MenuItems = ({ onSelect }) => (
    <>
      {["All","International","National","Sports","Business","Technology"].map((cat) => (
        <a
          key={cat}
          onClick={() => onSelect(cat)}
          className={category === cat ? "active" : ""}
          href="#"
        >
          {cat}
        </a>
      ))}
    </>
  );

  const Actions = () => (
    <div className="actions">
      <Link to="/epaper">
        <button className="btn"><i className="fa-solid fa-chalkboard"></i> E-paper</button>
      </Link>
      <Link to="/login">
        <button className="btn"><i className="fa-solid fa-user"></i> Sign Up</button>
      </Link>
    </div>
  );

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <Link to="/"><img src="/images/logoblack.png" alt="Logo" /></Link>
        </div>

        <div className="navbar-title">
          <h1><span>Sakib</span></h1>
        </div>

        <div className="navbar-actions">
          <Actions />
        </div>

        <div className="mobile-toggle">
          <img
            style={{ filter: "invert(0%) brightness(0)" }}
            src="/images/menu_open.svg"
            onClick={openMenu}
            alt="Open Menu"
          />
        </div>
      </div>

      <hr />

      <div className="menu-desktop">
        <MenuItems onSelect={setCategory} />
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div ref={menuRef} className="menu-mobile">
        <div className="menu-mobile-top">
          <div className="menu-mobile-buttons">
            <Actions />
          </div>
          <img
            src="/images/menu_close.svg"
            onClick={closeMenu}
            alt="Close Menu"
            className="menu-close"
          />
        </div>

        <MenuItems onSelect={(cat) => { setCategory(cat); closeMenu(); }} />
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <hr />
    </nav>
  );
}

export default Navbar;
