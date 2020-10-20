import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "../../customRender";
import { fireEvent } from "@testing-library/react";

import AddCampaignForm from "./index";
import data from "../../data";

// AddCampaignForm renders a form which is used to save a new campaign on state

const setup = () => {
  const utils = render(<AddCampaignForm />);
  const nameInput = utils.getByLabelText(/name/i);
  const messageInput = utils.getByLabelText(/message/i);
  const segmentInput = utils.getByLabelText(/segment/i);
  const tagsInput = utils.getByLabelText(/tags/i);
  return {
    nameInput,
    messageInput,
    segmentInput,
    tagsInput,
    ...utils,
  };
};

const newCampaign = {
  id: 6,
  name: "New Campaign",
  message: "Hi! I'm a test campaign",
  segment_value: "All Subscribers",
};

describe("<AddCampaignPage />", () => {
  it("Renders a form", () => {
    const { getByRole } = render(<AddCampaignForm />);

    expect(getByRole("form")).toBeInTheDocument();
  });

  it("Allows a user to add a campaign name", () => {
    const { nameInput } = setup();

    // a user changes the campaign name
    fireEvent.change(nameInput, { target: { value: newCampaign.name } });

    expect(nameInput.value).toBe(newCampaign.name);
  });

  it("Allows a user to add a campaign message", () => {
    const { messageInput } = setup();

    // a user changes the campaign message
    fireEvent.change(messageInput, { target: { value: newCampaign.message } });

    expect(messageInput.value).toBe(newCampaign.message);
  });

  it("Allows a user to choose a target segment", () => {
    const { segments } = data;
    const { segmentInput } = setup();

    // a user changes the campaign segment
    fireEvent.change(segmentInput, {
      target: { value: newCampaign.segment_value },
    });

    const findSegmentByName = segments.filter(
      (s) => s.name === segmentInput.value
    );

    expect(segmentInput.value).toEqual(findSegmentByName[0].name);
  });
});
