// renders a form to create a new campaign

import React from "react";

import { Layout } from "../components/PageElements";
import AddCampaignForm from "../components/AddCampaign";

const AddCampaign = () => {
  return (
    <Layout>
      <AddCampaignForm />
    </Layout>
  );
};

export default AddCampaign;
