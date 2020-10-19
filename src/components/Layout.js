import React from "react";

import Header from "./Header";

const Layout = ({ ...props }) => {
  return (
    <div className="container my-5">
      <Header title={"Postscript.io"} />
      <div className="container my-5">{props.children}</div>
    </div>
  );
};

export default Layout;
