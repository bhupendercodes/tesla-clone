import React from "react";
import "./MenuTertiary.scss";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import Profile from "@material-ui/icons/PermIdentity";
import Card from "@material-ui/icons/CreditCardOutlined";
import Bolt from "@material-ui/icons/BatteryChargingFull";
import Box from "@material-ui/icons/WorkOutline";
import History from "@material-ui/icons/UsbRounded";

function MenuTertiary() {
  return (
    <div className="drop__menu">
      <div className="drop__menu__link">
        <Link to="/tesla-account">
          <HomeIcon />
          Dashboard
        </Link>
      </div>
      <div className="drop__menu__link">
        <Link to="/tesla-account">
          <Profile />
          Profile Settings
        </Link>
      </div>
      <div className="drop__menu__link">
        <Link to="/tesla-account">
          <Card />
          Payment Method
        </Link>
      </div>
      <div className="drop__menu__link">
        <Link to="/tesla-account">
          <Bolt />
          Charging
        </Link>
      </div>
      <div className="drop__menu__link">
        <Link to="/tesla-account">
          <Box />
          Loot Box
        </Link>
      </div>
      <div className="drop__menu__link">
        <Link to="/tesla-account">
          <History />
          Order History
        </Link>
      </div>
    </div>
  );
}

export default MenuTertiary;
