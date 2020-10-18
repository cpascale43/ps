import React from "react";

const Container = ({ children }) => {
  return (
    <div
      className="container"
      style={{
        border: "1px solid red",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
