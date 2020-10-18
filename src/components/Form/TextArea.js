// message

import React from "react";
import Label from "./Label";
// import TextAreaField from "./TextAreaField";
import InputFieldContainer from "./InputFieldContainer";

const TextArea = ({ name, id, labelText, value, handleChange }) => {
  return (
    <InputFieldContainer>
      <Label labelText={labelText} />
      <textarea id={id} name={name} value={value} onChange={handleChange} />
      {/* <TextAreaField
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      /> */}
    </InputFieldContainer>
  );
};

export default TextArea;
