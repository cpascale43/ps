import React from "react";

const Button = ({ type, buttonText, classes, onClick }) => {
  return (
    <button className={classes} type={type} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
