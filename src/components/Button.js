import React from "react";

import { NavLink } from "react-router-dom";

const Button = ({link, styles, buttonName}) => {
  return (
    <NavLink to={link}>
      <button type="button" className={styles}>
        {buttonName}
      </button>
    </NavLink>
  );
};

export default Button;
