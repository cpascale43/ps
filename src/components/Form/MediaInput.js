import React from "react";
import InputFieldContainer from "./InputFieldContainer";
import Label from "./Label";

const MediaInput = ({ handleChange }) => {
  return (
    <InputFieldContainer>
      <Label id={"Media"} labelText={"Media"} />
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="Media"
          name="image"
          onChange={handleChange}
        />
        <label className="custom-file-label" htmlFor="Media">
          Choose file
        </label>
      </div>
    </InputFieldContainer>
  );
};

export default MediaInput;
