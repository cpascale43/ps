// name

import React from "react";
import Label from "./Label";
import TextInputField from "./TextInputField";
import InputFieldContainer from "./InputFieldContainer";

const TextInput = ({ name, id, value, labelText, handleChange }) => {
  return (
    <InputFieldContainer>
      <Label htmlFor={id} labelText={labelText} />
      <TextInputField
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </InputFieldContainer>
  );
};

export default TextInput;
