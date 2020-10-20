import React from "react";

const Label = ({ labelText, htmlFor, classes = "labelStyles" }) => {
  return (
    <label htmlFor={htmlFor} className={classes}>
      <span style={{ fontWeight: "bold" }}>{labelText}</span>
    </label>
  );
};

export default Label;
