import React from "react";
import { Link } from "react-router-dom";
import "./MenuSecondary.scss";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import Profile from "@material-ui/icons/PermIdentity";
import Card from "@material-ui/icons/CreditCardOutlined";
import Bolt from "@material-ui/icons/BatteryChargingFull";
import Box from "@material-ui/icons/WorkOutline";
import History from "@material-ui/icons/AvTimer";
import ArrowDown from "@material-ui/icons/KeyboardArrowDown";
import CloseIcon from "@material-ui/icons/Close";

function MenuSecondary({ isDropMenuOpen, setIsDropMenuOpen }) {
  const on__action = () => {
    setIsDropMenuOpen(!isDropMenuOpen);
  };
  return (
    <div className="dashboard">
      <div className="dashboard__link">
        <Link to="/tesla-account">
          <HomeIcon />
          Dashboard
          <div className="drop__down" onClick={on__action}>
            {isDropMenuOpen ? (
              <CloseIcon className="close" />
            ) : (
              <ArrowDown className="arrow__down" />
            )}
          </div>
        </Link>
      </div>
      <div className="dashboard__link">
        <Link to="/tesla-account">
          <Profile />
          Profile Settings
        </Link>
      </div>
      <div className="dashboard__link">
        <Link to="/tesla-account">
          <Card />
          Payment Method
        </Link>
      </div>
      <div className="dashboard__link">
        <Link to="/tesla-account">
          <Bolt />
          Charging
        </Link>
      </div>
      <div className="dashboard__link">
        <Link to="/tesla-account">
          <Box />
          Loot Box
        </Link>
      </div>
      <div className="dashboard__link">
        <Link to="/tesla-account">
          <History />
          Order History
        </Link>
      </div>
    </div>
  );
}

export default MenuSecondary;
