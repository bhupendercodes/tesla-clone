import React from "react";
import "./HeaderPrimary.scss";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../../../Images/tesla__logo.png";
function HeaderPrimary({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img className="logo__icon" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/">Model S</Link>
        <Link to="/">Model 3</Link>
        <Link to="/">Model X</Link>
        <Link to="/">Model Y</Link>
        <Link to="/">Solar Roof</Link>
        <Link to="/">Solar Panel</Link>
      </div>
      <div className="right__side">
        <Link to="/" className={isMenuOpen && "header__links--hiddden"}>
          Shop
        </Link>
        <Link to="/login" className={isMenuOpen && "header__links--hiddden"}>
          Account
        </Link>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
}

export default HeaderPrimary;
