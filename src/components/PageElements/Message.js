import React from "react";

const Message = ({ message }) => (
  <span>
    <span style={{ fontWeight: "bold" }}>Message: </span>
    {message}
  </span>
);

export default Message;
