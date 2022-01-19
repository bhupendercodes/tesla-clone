import React from "react";
import "./HeaderSecondary.scss";
import { useDispatch } from "react-redux";
import { auth } from "../../../../../firebase";
import { logout } from "../../../../../userSlice";
import logo from "../../../Images/tesla__logo.png";
import { Link, useNavigate } from "react-router-dom";
import Exit from "@material-ui/icons/ExitToAppRounded";

function HeaderSecondary({ isMenuOpen, setIsMenuOpen }) {
  const dispatch = useDispatch();
  const history = useNavigate();

  const LogoutOfApp = () => {
    auth.signOut().then(() => {
      dispatch(logout());
      history.pushState("/");
    });
  };
  return (
    <div className="account__header">
      <Link to="/">
        <img className="logo__icon" src={logo} alt="logo" />
      </Link>
      <div>
        <button onClick={LogoutOfApp} className="sign__out">
          <span>Sign Out</span>
          <Exit />
        </button>
      </div>
    </div>
  );
}

export default HeaderSecondary;
