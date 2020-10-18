import React from "react";

import Header from "./Header"

const Layout = ({ ...props }) => {
  return (
    <div className="container">
      <Header title={'Postscript.io'} />
      {props.children}
    </div>
  );
};

export default Layout;
