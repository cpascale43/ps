import React, { Fragment } from "react";

import { Row, DisplayText, Image } from "../index";

const DisplayCampaign = ({ name, message, media, alt }) => {
  return (
    <Fragment>
      <Row>
        <DisplayText text={name} label={"Name"} />
      </Row>
      <Row>
        <DisplayText text={message} label={"Message"} />
      </Row>
      <Row>
        <DisplayText text={alt} label={"Alt text"} />
      </Row>
      <Row>
        <Image imgSrc={media} />
      </Row>
    </Fragment>
  );
};
export default DisplayCampaign;
