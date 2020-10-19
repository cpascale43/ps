import React from "react";

import { Container, Row, Column, Image, CTRText, DisplayText } from "../index";

const SentCampaignView = ({ media, name, stats, message }) => {

  return (
    <Container>
      <Row>
        <Column>
          <Image imgSrc={media} />
        </Column>

        <Column>
          <Row>
            <DisplayText text={name} label={"Name"} />
          </Row>

          <Row>
            <CTRText clicked={stats.clicked} sent={stats.sent} />
          </Row>

          <Row>
            <DisplayText text={message} label={"Message"} />
          </Row>
        </Column>
      </Row>
    </Container>
  );
};

export default SentCampaignView;
