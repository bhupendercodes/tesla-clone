import React from "react";
import "./CardSecondary.scss";
import { Link } from "react-router-dom";
import Info from "@material-ui/icons/InfoOutlined";

function CardSecondary({ image, title, link }) {
  return (
    <div className="card__2">
      <div className="card__2__header">
        <img className="card__2__image" src={image} alt="photo" />
      </div>
      <div className="card__2__body">
        <p>
          {title}
          <Info />
        </p>
        <Link to="tesla-account">{link}</Link>
      </div>
    </div>
  );
}

export default CardSecondary;
