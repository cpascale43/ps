// if preview campaign, returns edit form
// if sent campaign, returns view only

import React, { useContext, useEffect, useState } from "react";
import { CampaignContext } from "../contexts/campaigns";

import EditCampaignView from "./EditCampaign";
import SentCampaignView from "./SentCampaign";

const CampaignView = ({ id }) => {
  const [campaign, setCampaign] = useState({});
  const { campaigns } = useContext(CampaignContext);

  // sets campaign matching current id on state
  useEffect(() => {
    const selectedCampaign = campaigns.filter((c) => c.id === Number(id));
    setCampaign(...selectedCampaign);
  }, [campaigns, id]);

  if (campaign && campaign.status === "Preview") {
    return <EditCampaignView campaign={campaign} />;
  } else if (campaign && campaign.status === "Sent") {
    return (
      <SentCampaignView
        media={campaign.media}
        name={campaign.name}
        stats={campaign.stats}
        message={campaign.text}
      />
    );
  } else if (!campaign.id) {
    return <div>You haven't run any campaigns yet!</div>;
  }
};

export default CampaignView;
