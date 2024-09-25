import { useState, useRef } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src="logo.png" alt="" />
      <img
        src="menu_open.svg"
        onClick={openMenu}
        className="nav-mob-open"
      ></img>
      <ul ref={menuRef} className="nav-menu">
        <ul className="nav-menu">
          <img
            src="menu_close.svg"
            alt=""
            className="nav-mob-close"
            onClick={closeMenu}
          ></img>
        </ul>
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}> Home</p>
          </AnchorLink>
          {menu === "home" ? (
            <img src="nav_underline.svg" className="set"></img>
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About me </p>{" "}
          </AnchorLink>
          {menu === "about" ? (
            <img src="nav_underline.svg" className="set"></img>
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skill">
            <p onClick={() => setMenu("services")}>Skills</p>
          </AnchorLink>
          {menu === "services" ? (
            <img src="nav_underline.svg" className="set"></img>
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Project</p>
          </AnchorLink>
          {menu === "Portfolio" ? (
            <img src="nav_underline.svg" className="set"></img>
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? (
            <img src="nav_underline.svg" className="set"></img>
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};
export default Navbar;
