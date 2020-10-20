// renders information about an individual campaign

import React from "react";
import { useParams } from "react-router-dom";

import { Layout } from "../components/PageElements";
import CampaignView from "../components/CampaignView";

const CampaignPage = () => {
  const { id } = useParams();

  return (
    <Layout>
      <CampaignView id={id} />
    </Layout>
  );
};

export default CampaignPage;
