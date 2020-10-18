import React from "react";

const Label = ({ labelText, id }) => {
  return (
    <label htmlFor={id} className="labelStyles">
      <span style={{ fontWeight: "bold" }}>{labelText}</span>
    </label>
  );
};

export default Label;
