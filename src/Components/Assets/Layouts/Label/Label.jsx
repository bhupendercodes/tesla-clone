import React from "react";

function Label({ value, id }) {
  const style = {
    color: "#5c5e62",
    fontWeight: "500",
    fontSize: "15px",
    paddingLeft: "20px",
    marginBottom: "5px",
  };
  return <label style={style} htmlFor={id}>{value}</label>;
}

export default Label;
