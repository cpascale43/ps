import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import {
  TextArea,
  TextInput,
  Form,
  SegmentSelect,
  TagSelect,
  MediaInput,
} from "../FormElements";
import {
  Container,
  DisplayCampaign,
  Row,
  Column,
  Button,
} from "../PageElements";
import { CampaignContext } from "../../contexts/campaigns";

const EditCampaignForm = ({ campaign }) => {
  let history = useHistory();
  const { editCampaign } = useContext(CampaignContext);
  const [campaignData, setCampaignData] = useState({
    status: "Preview",
    id: campaign && campaign.id,
    name: campaign && campaign.name,
    text: campaign && campaign.text,
    segment_id: campaign && campaign.segment_id,
    media: campaign && campaign.media,
    alt: campaign && campaign.alt,
  });

  const handleChange = (key, value) => {
    if (key === "media") {
      value = URL.createObjectURL(value);
    }
    setCampaignData({ ...campaignData, [key]: value });
  };

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
            alt={campaignData.alt}
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
            <SegmentSelect
              handleChange={handleChange}
              currentSegmentId={campaign && campaign.segment_id}
            />
            <TagSelect handleClick={handleClickTags} />
            <MediaInput
              handleChange={(e) => handleChange("media", e.target.files[0])}
            />
            <TextInput
              name={"alt"}
              id={"alt"}
              value={campaignData.alt}
              labelText={"Alt text"}
              handleChange={(e) => handleChange("alt", e.target.value)}
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
