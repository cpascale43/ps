import React from "react";

const TextAreaField = ({ id, name, value, handleChange }) => {
  return <textarea id={id} name={name} value={value} onChange={handleChange} />;
};

export default TextAreaField;
