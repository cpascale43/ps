import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Button from "../PageElements/Button";
import { CampaignContext } from "../../contexts/campaigns";
import TextInput from "../Form/TextInput";
import MediaInput from "../Form/MediaInput";
import TextArea from "../Form/TextArea";
import TagSelect from "../Form/TagSelect";
import SegmentSelect from "../Form/SegmentSelect";
import Form from "../Form";

const AddCampaignForm = ({ props }) => {
  let history = useHistory();
  const { addCampaign } = useContext(CampaignContext);
  const [campaignData, setCampaignData] = useState({
    status: "Preview",
    id: null,
    name: "",
    text: "",
    segment_id: "",
    tags: [],
    media: null,
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
      tags: [...campaignData.tags, tag],
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
