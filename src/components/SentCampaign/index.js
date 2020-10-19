import React from "react";

import {
  Container,
  Row,
  Column,
  Image,
  Name,
  CTRText,
  Message,
} from "../index";

const SentCampaignView = ({ media, name, stats, message }) => {
  return (
    <Container>
      <Row>
        <Column>
          <Image imgSrc={media} />
        </Column>

        <Column>
          <Row>
            <Name name={name} />
          </Row>

          <Row>
            <CTRText clicked={stats.clicked} sent={stats.sent} />
          </Row>

          <Row>
            <Message message={message} />
          </Row>
        </Column>
      </Row>
    </Container>
  );
};

export default SentCampaignView;
