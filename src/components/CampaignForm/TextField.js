// name, message

import React from "react";
import Label from "./Label";
import InputField from "./InputField";
import InputFieldContainer from "./InputFieldContainer";

const TextField = ({ name, id, value, labelText }) => {
  const handleChange = () => {
    // do something onChange
  };

  return (
    <InputFieldContainer>
      <Label labelText={labelText} />
      <InputField
        type={"text"}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </InputFieldContainer>
  );
};

export default TextField;
