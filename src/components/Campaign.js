// If preview, return Edit form
// If sent, return view only

import React, { useContext, useEffect, useState } from "react";

import Container from "./Container";
import EditCampaign from "./EditCampaign";
import { CTRText, Name, Message, Image, Row, Column } from "./index";
import { CampaignContext } from "../contexts/campaigns";

const Campaign = ({ id }) => {
  const [campaign, setCampaign] = useState({});
  const { campaigns } = useContext(CampaignContext);

  useEffect(() => {
    const selectedCampaign = campaigns.filter((c) => c.id === Number(id));
    setCampaign(...selectedCampaign);
  }, [campaigns, id]);

  if (campaign && campaign.status === "Preview") {
    return (
      <Container>
        <EditCampaign campaign={campaign} />
      </Container>
    );
  } else if (campaign && campaign.status === "Sent") {
    console.log("sent campaign rendering");
    return (
      <Container>
        <Row>
          <Column>
            <Image imgSrc={campaign.media} />
          </Column>

          <Column>
            <Row>
              <Name name={campaign.name} />
            </Row>

            <Row>
              <CTRText
                clicked={campaign.stats.clicked}
                sent={campaign.stats.sent}
              />
            </Row>

            <Row>
              <Message message={campaign.text} />
            </Row>
          </Column>
        </Row>
      </Container>
    );
  } else if (!campaign.id) {
    return <div>You haven't run any campaigns yet!</div>;
  }
};

export default Campaign;
