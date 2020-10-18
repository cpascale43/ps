import React from "react";

const Label = ({ labelText, id }) => {
  return (
    <label id={id} className="labelStyles">
      {labelText}
    </label>
  );
};

export default Label;
