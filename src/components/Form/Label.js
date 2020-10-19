import React from "react";

const Label = ({ labelText, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="labelStyles">
      <span style={{ fontWeight: "bold" }}>{labelText}</span>
    </label>
  );
};

export default Label;
