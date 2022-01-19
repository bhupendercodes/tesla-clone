import "./Block.scss";
import React from "react";
import { Link } from "react-router-dom";

function Block({
  name,
  text,
  btn__1__text,
  btn__2__text,
  second___btn,
  footer__links,
}) {
  const btn__1 = {
    color: "white",
    backgroundColor: "#393c41",
    opacity: "0.9",
  };
  const btn__2 = {
    color: "black",
    backgroundColor: "white",
    opacity: "0.8",
  };
  return (
    <div className="block__section">
      <div className="block">
        <div className="block__info">
          <div className="block__info__text">
            <h1>{name}</h1>
            <h4>{text}</h4>
          </div>
          <div className="block__actions">
            <button style={btn__1}>{btn__1__text}</button>
            {second___btn && <button style={btn__2}>{btn__2__text}</button>}
          </div>
          {footer__links && (
            <div className="block__links">
              <Link to="/">Tesla &copy; 2022</Link>
              <Link to="/">Privacy &amp; Legal</Link>
              <Link to="/">Contact</Link>
              <Link to="/">Careers</Link>
              <Link to="/">News</Link>
              <Link to="/">Engage</Link>
              <Link to="/">Locations</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Block;
