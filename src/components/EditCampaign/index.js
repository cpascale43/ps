import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import DisplayCampaign from "./DisplayCampaign";
import { Container, Row, Column } from "../index";
import TextArea from "../Form/TextArea";
import TextInput from "../Form/TextInput";
import Form from "../Form";
import SegmentSelect from "../Form/SegmentSelect";
import TagSelect from "../Form/TagSelect";
import MediaInput from "../Form/MediaInput";
import Button from "../AddCampaign/Button";
import { CampaignContext } from "../../contexts/campaigns";

const EditCampaignForm = ({ campaign }) => {
  let history = useHistory();
  const { editCampaign } = useContext(CampaignContext);
  const [campaignData, setCampaignData] = useState({
    status: "Preview",
    id: campaign.id,
    name: campaign.name,
    text: campaign.text,
    segment_id: campaign.segment_id,
    tags: [],
    media: campaign.media,
  });

  const handleChange = (key, value) => {
    // do something onChanges

    if (key === "media") {
      value = URL.createObjectURL(value);
    }
    setCampaignData({ ...campaignData, [key]: value });
  };

  // const handleChange = (e) => {
  //   // do something onChanges
  //   setcampaignData({ ...campaignData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    editCampaign(campaignData);
    history.push("/");
  };

  // adds the tag's text to the campaign's message
  const handleClickTags = (tag) => {
    setCampaignData({
      ...campaignData,
      text: campaignData.text + tag,
      tags: [...campaignData.tags, tag],
    });
  };

  return (
    <Container>
      <Row>
        <Column>
          <DisplayCampaign
            name={campaignData.name}
            message={campaignData.text}
            media={campaignData.media}
          />
        </Column>
        <Column>
          <Form>
            <TextInput
              name={"name"}
              id={"name"}
              value={campaignData.name}
              labelText={"Name"}
              handleChange={(e) => handleChange("name", e.target.value)}
            />
            <TextArea
              name={"text"}
              id={"text"}
              value={campaignData.text}
              labelText={"Message"}
              handleChange={(e) => handleChange("text", e.target.value)}
            />
            <SegmentSelect handleChange={handleChange} />
            <TagSelect handleClick={handleClickTags} />
            <MediaInput
              handleChange={(e) => handleChange("media", e.target.files[0])}
            />
            <Button
              classes={"btn btn-primary"}
              buttonText={"Save Changes"}
              onClick={handleSubmit}
              type={"submit"}
            />
          </Form>
        </Column>
      </Row>
    </Container>
  );
};

export default EditCampaignForm;
