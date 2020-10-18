import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Button from "./Button";
import { CampaignContext } from "../../contexts/campaigns";
import TextInput from "../Form/TextInput";
import TextArea from "../Form/TextArea";
import TagSelect from "../Form/TagSelect";

const AddCampaignForm = ({ props }) => {
  let history = useHistory();
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
      text: campaignForm.text + tag,
      tags: [...campaignForm.tags, tag],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCampaign(campaignForm);
    history.push("/");
  };

  return (
    <form>
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
      <Button
        classes={"btn btn-primary"}
        buttonText={"Add Campaign"}
        onClick={handleSubmit}
        type={"submit"}
      />
    </form>
  );
};

export default AddCampaignForm;
