import React, { Fragment } from "react";

import { Row, Name, Message, Image } from "../index";

const DisplayCampaign = ({ name, message, media }) => {
  return (
    <Fragment>
      <Row>
        <Name name={name} />
      </Row>
      <Row>
        <Message message={message} />
      </Row>
      <Row>
        <Image imgSrc={media} />
      </Row>
    </Fragment>
  );
};
export default DisplayCampaign;
