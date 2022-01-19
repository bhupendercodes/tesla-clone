import React from "react";
import "./ButtonPrimary.scss";

function ButtonPrimary({ name, type, onClick }) {
  return (
    <button className="button__primary" onClick={onClick} type={type}>
      {name}
    </button>
  );
}

export default ButtonPrimary;
