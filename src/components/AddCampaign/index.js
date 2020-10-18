import React, { useState, useContext } from "react";

import SubmitButton from "./SubmitButton";
import { CampaignContext } from "../../contexts/campaigns";
import TextInput from "../Form/TextInput";
import TextArea from "../Form/TextArea";
import TagSelect from "../Form/TagSelect";

const AddCampaignForm = ({ props }) => {
  const { addCampaign } = useContext(CampaignContext);
  const [campaignForm, setCampaignForm] = useState({
    status: "",
    id: null,
    name: "",
    text: "",
    segment_id: "",
    tags: [],
    media: null,
  });

  const handleChange = (e) => {
    // do something onChanges
    setCampaignForm({ ...campaignForm, [e.target.name]: e.target.value });
  };

  const handleClick = (tag) => {
    setCampaignForm({
      ...campaignForm,
      tags: [...campaignForm.tags, tag],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(campaignForm);
    addCampaign(campaignForm);
  };

  return (
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
      <TagSelect handleClick={handleClick} />
      <SubmitButton buttonText={"Add campaign"} />
    </form>
  );
};

export default AddCampaignForm;
