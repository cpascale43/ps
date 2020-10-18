import React from "react";
import { Link } from "react-router-dom";

import Button from './Button'

const Header = ({ title }) => {
  return (
    <h2>
      <Link to="/">{title}</Link>
      <Button link={"/campaign/new"} buttonName={"Create Campaign"} />
    </h2>
  );
};

export default Header