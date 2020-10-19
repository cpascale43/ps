import React from "react";

import { NavLink } from "react-router-dom";

const Button = ({link, classes, buttonName}) => {
  return (
    <NavLink to={link}>
      <button type="button" className={classes}>
        {buttonName}
      </button>
    </NavLink>
  );
};

export default Button;
