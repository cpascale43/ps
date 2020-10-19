import React from "react";

const DisplayText = ({ text, label }) => (
  <span>
    <span style={{ fontWeight: "bold" }}>{label}: </span>
    {text}
  </span>
);

export default DisplayText;
