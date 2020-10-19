// CampaignList (table)

import React, { useContext } from "react";
import Layout from "../components/Layout";
import CampaignList from "../components/CampaignList";

import {CampaignContext} from "../contexts/campaigns"

const HomePage = () => {
  const { campaigns } = useContext(CampaignContext);
  return (
    <Layout>
      <CampaignList campaigns={campaigns} />
    </Layout>
  );
};

export default HomePage;
