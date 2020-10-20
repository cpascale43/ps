import React from "react";

import { InputFieldContainer, Label } from "./index";

const MediaInput = ({ handleChange }) => {
  return (
    <InputFieldContainer>
      <Label htmlFor={"Media"} labelText={"Media"} />
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="Media"
          name="image"
          onChange={handleChange}
        />
        <Label
          labelText={"Choose file"}
          classes="custom-file-label"
          htmlFor="Media"
        />
      </div>
    </InputFieldContainer>
  );
};

export default MediaInput;
