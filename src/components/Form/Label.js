import React from "react";

const Label = ({ labelText, id }) => {
  return (
    <label htmlFor={id} className="labelStyles">
      {labelText}
    </label>
  );
};

export default Label;
