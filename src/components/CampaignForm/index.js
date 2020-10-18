import React from "react";

import TextField from "./TextField";

const CampaignForm = ({ campaign }) => {
  console.log('hi from form', campaign)
  let input;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    // dispatch(addCampaign(input.value));
    console.log(input.value);
    input.value = "";
  };

  if (!campaign) {
    return (
      <form onSubmit={handleSubmit}>
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Campaign</button>
      </form>
    );
  } else
    return (
      <form onSubmit={handleSubmit}>
        <TextField name={"name"} value={'name'} id={"name"} labelText={"Name"} />
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Campaign</button>
      </form>
    );
};

export default CampaignForm;
