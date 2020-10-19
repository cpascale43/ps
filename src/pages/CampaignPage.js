// Form, Campaign

import React from "react";
import Layout from "../components/Layout";
import CampaignView from "../components/CampaignView";

const ViewCampaign = (route) => {
  const id = route.match.params.id;

  return (
    <Layout>
      <CampaignView id={id} />
    </Layout>
  );
};

export default ViewCampaign;
