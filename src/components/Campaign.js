// If preview, return Edit form
// If sent, return view only

import React, { useContext, useEffect, useState } from "react";

import Container from "./Container";
import CampaignForm from "./CampaignForm";
import { CTRText, Name, Message, Image } from "./index";
import { CampaignContext } from "../contexts/campaigns";

const Campaign = ({ id }) => {
  const [campaign, setCampaign] = useState({});
  const { campaigns } = useContext(CampaignContext);
  console.log("hi from campaign component", campaign);

  useEffect(() => {
    const selectedCampaign = campaigns.filter((c) => c.id === Number(id));
    setCampaign(...selectedCampaign);
  }, [campaigns, id]);

  if (campaign && campaign.status === "Preview") {
    return (
      <Container>
        <CampaignForm campaign={campaign} />
      </Container>
    );
  } else if (campaign && campaign.status === "Sent") {
    return (
      <Container>
        <Name name={campaign.name} />
        <Message message={campaign.text} />
        <Image imgSrc={campaign.media} />
        <CTRText clicked={campaign.stats.clicked} sent={campaign.stats.sent} />
      </Container>
    );
  } else if (!campaign.id) {
    return <div>You haven't run any campaigns yet!</div>;
  }
};

export default Campaign;
