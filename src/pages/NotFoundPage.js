import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <div>Sorry! That page wasn't found.</div>

      <Link to="/">Go Home</Link>
    </Layout>
  );
};

export default NotFoundPage;
