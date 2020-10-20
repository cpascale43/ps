// if preview campaign, returns edit form
// if sent campaign, returns view only

import React, { useContext, useEffect, useState } from "react";

import EditCampaign from "./EditCampaign";
import DisplayCampaign from "./PageElements/DisplayCampaign";
import { CampaignContext } from "../contexts/campaigns";

const CampaignView = ({ id }) => {
  const [campaign, setCampaign] = useState({});
  const { campaigns } = useContext(CampaignContext);

  // sets campaign matching current id on state
  useEffect(() => {
    const selectedCampaign = campaigns.filter((c) => c.id === Number(id));
    setCampaign(...selectedCampaign);
  }, [campaigns, id]);

  if (campaign && campaign.status === "Preview") {
    return <EditCampaign campaign={campaign} />;
  } else if (campaign && campaign.status === "Sent") {
    return (
      <DisplayCampaign
        media={campaign.media}
        name={campaign.name}
        stats={campaign.stats}
        message={campaign.text}
        alt={campaign.alt}
      />
    );
  } else {
    return <div>Oops, something happened!</div>;
  }
};

export default CampaignView;
