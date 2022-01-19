import React from "react";
import "./HeaderTertiary.scss";
import { Link } from "react-router-dom";
import logo from "../../../Images/tesla__logo.png";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";

function HeaderTertiary() {
  return (
    <div>
      <div className="basic__header">
        <div className="logo__icon">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="language">
          <LanguageOutlinedIcon />
          <span>en-US</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderTertiary;
