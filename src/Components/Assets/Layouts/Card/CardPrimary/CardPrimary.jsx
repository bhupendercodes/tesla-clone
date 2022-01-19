import React from "react";
import "./CardPrimary.scss";
import { Link } from "react-router-dom";

function CardPrimary({ image, title, description, link }) {
  return (
    <div className="card__1">
      <div className="card__1__header">
        <img className="card__1__image" src={image} alt="photo" />
      </div>
      <div className="card__1__body">
        <p>{title}</p>
        <p>{description}</p>
        <Link to="tesla-account">{link}</Link>
      </div>
    </div>
  );
}

export default CardPrimary;
