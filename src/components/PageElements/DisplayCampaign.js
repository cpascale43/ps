import React, { Fragment } from "react";

import { Row, DisplayText, Image, CTRText } from "./index";

const DisplayCampaign = ({ name, message, media, alt, stats }) => {
  if (stats) {
    return (
      <Fragment>
        <Row>
          <DisplayText text={name} label={"Name"} />
        </Row>
        <Row>
          <CTRText clicked={stats.clicked} sent={stats.sent} />
        </Row>
        <Row>
          <DisplayText text={message} label={"Message"} />
        </Row>
        {media ? (
          <Fragment>
            <Row>
              <DisplayText text={alt} label={"Alt text"} />
            </Row>
            <Row>
              <Image imgSrc={media} />
            </Row>
          </Fragment>
        ) : null}
      </Fragment>
    );
  } else
    return (
      <Fragment>
        <Row>
          <DisplayText text={name} label={"Name"} />
        </Row>
        <Row>
          <DisplayText text={message} label={"Message"} />
        </Row>
        {media ? (
          <Fragment>
            <Row>
              <DisplayText text={alt} label={"Alt text"} />
            </Row>
            <Row>
              <Image imgSrc={media} />
            </Row>
          </Fragment>
        ) : null}
      </Fragment>
    );
};
export default DisplayCampaign;
