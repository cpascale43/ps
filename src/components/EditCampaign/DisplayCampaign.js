import React from "react";

import { Row, Column, Name, Message, Image } from "../index";

const DisplayCampaign = ({ name, text, media }) => {
  return (
    <Column>
      <Row>
        <Name name={name} />
      </Row>
      <Row>
        <Message message={text} />
      </Row>
      <Row>
        <Image imgSrc={media} />
      </Row>
    </Column>
  );
};
export default DisplayCampaign;
