import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

const Header = ({ title }) => {
  return (
    <div className="container d-flex justify-content-between">
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <Button
        link={"/campaign/new"}
        buttonName={"Create Campaign"}
        classes={"btn btn-primary btn-lg"}
      />
    </div>
  );
};

export default Header;
