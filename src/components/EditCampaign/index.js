import React, { useState, useContext } from "react";

import DisplayCampaign from "./DisplayCampaign"
import { Container, Row, Column } from "../index";
import TextArea from "../Form/TextArea"
import TextInput from "../Form/TextInput"
import { CampaignContext } from "../../contexts/campaigns";

const EditCampaignForm = ({ campaign }) => {
  const { editCampaign } = useContext(CampaignContext);
  const [campaignForm, setCampaignForm] = useState({
    status: "",
    id: campaign.id,
    name: campaign.name,
    text: campaign.text,
    segment_id: null,
    media: campaign.media,
  });

  const handleChange = (e) => {
    // do something onChanges
    setCampaignForm({ ...campaignForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(campaignForm);
    editCampaign(campaignForm);
  };

  return (
    <Container>
      <Row>
        <DisplayCampaign
          name={campaignForm.name}
          message={campaignForm.message}
          media={campaignForm.media}
        />
        <Column>
          <form onSubmit={handleSubmit}>
            <TextInput
              name={"name"}
              id={"name"}
              value={campaignForm.name}
              labelText={"Name"}
              handleChange={handleChange}
            />
            <TextArea
              name={"text"}
              id={"text"}
              value={campaignForm.text}
              labelText={"Message"}
              handleChange={handleChange}
            />
            <button type="submit">Edit Campaign</button>
          </form>
        </Column>
      </Row>
    </Container>
  );
};

export default EditCampaignForm;
