import React from "react";

const TextInputField = ({ name, id, onChange }) => {
  return (
    <input
      className="form-control"
      type={"text"}
      id={id}
      name={name}
      onChange={onChange}
    />
  );
};

export default TextInputField;
