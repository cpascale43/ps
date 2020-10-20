import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import {
  TextInput,
  MediaInput,
  TextArea,
  TagSelect,
  SegmentSelect,
  Form,
} from "../FormElements";

import { Button } from "../PageElements";
import { CampaignContext } from "../../contexts/campaigns";

const AddCampaignForm = ({ props }) => {
  let history = useHistory();
  const { addCampaign } = useContext(CampaignContext);
  const [campaignData, setCampaignData] = useState({
    status: "Preview",
    id: null,
    name: "",
    text: "",
    segment_id: null,
    media: null,
    alt: null,
  });

  const handleChange = (key, value) => {
    if (key === "media") {
      value = URL.createObjectURL(value);
    }
    setCampaignData({ ...campaignData, [key]: value });
  };

  // adds the tag's text to the campaign's message
  const handleClickTags = (tag) => {
    setCampaignData({
      ...campaignData,
      text: campaignData.text + tag,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCampaign(campaignData);
    history.push("/");
  };

  return (
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
      <TextInput
        name={"alt"}
        id={"alt"}
        value={campaignData.alt}
        labelText={"Alt text"}
        handleChange={(e) => handleChange("alt", e.target.value)}
      />
      <Button
        classes={"btn btn-primary"}
        buttonText={"Add Campaign"}
        onClick={handleSubmit}
        type={"submit"}
      />
      <Button
        classes={"btn btn-danger ml-2"}
        buttonText={"Cancel"}
        onClick={() => history.push("/")}
      />
    </Form>
  );
};

export default AddCampaignForm;
