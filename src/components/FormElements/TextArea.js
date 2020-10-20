import React from "react";
import { Label, InputFieldContainer } from "./index";

const TextArea = ({ name, id, labelText, value, handleChange }) => {
  return (
    <InputFieldContainer>
      <Label htmlFor={id} labelText={labelText} />
      <textarea
        className="form-control"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </InputFieldContainer>
  );
};

export default TextArea;
