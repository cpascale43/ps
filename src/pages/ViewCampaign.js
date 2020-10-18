// Form, Campaign

import React from "react";
import Layout from "../components/Layout";
import Campaign from "../components/Campaign";

const ViewCampaign = (route) => {
  const id = route.match.params.id;

  return (
    <Layout>
      <Campaign id={id} />
    </Layout>
  );
};

export default ViewCampaign;
