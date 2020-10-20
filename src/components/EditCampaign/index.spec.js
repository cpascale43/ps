import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "../../customRender";
import { fireEvent } from "@testing-library/react";

import EditCampaignForm from "./index";
import data from "../../data";

// EditCampaignForm renders a form which is used to edit a campaign

const setup = () => {
  const prevCampaign = data.campaigns[0];

  const utils = render(<EditCampaignForm campaign={prevCampaign} />);

  const nameInput = utils.getByLabelText(/name/i);
  const messageInput = utils.getByLabelText(/message/i);
  const segmentInput = utils.getByLabelText(/segment/i);
  const tagsInput = utils.getByLabelText(/tags/i);
  const mediaInput = utils.getByLabelText(/media/i);
  const altText = utils.getByLabelText(/alt text/i);
  return {
    nameInput,
    messageInput,
    segmentInput,
    tagsInput,
    mediaInput,
    altText,
    ...utils,
  };
};

const newCampaign = {
  id: 6,
  name: "New Campaign",
  message: "Hi! I'm a test campaign",
  segment_value: "All Subscribers",
  img: "https://unsplash.com/photos/OI1ToozsKBw",
  gif: "https://media.giphy.com/media/2D8g2rXcWx1DO/giphy.gif",
  alt: "Wall-E looks up at to the left of the camera",
};

describe("<EditCampaign />", () => {
  it("Renders a form", () => {
    const { getByRole } = render(<EditCampaignForm />);

    expect(getByRole("form")).toBeInTheDocument();
  });

  it("Allows a user to edit a campaign name", () => {
    const { nameInput } = setup();

    // a user changes the campaign name
    fireEvent.change(nameInput, { target: { value: newCampaign.name } });

    expect(nameInput.value).toBe(newCampaign.name);
  });

  it("Allows a user to edit a campaign message", () => {
    const { messageInput } = setup();

    // a user changes the campaign message
    fireEvent.change(messageInput, { target: { value: newCampaign.message } });

    expect(messageInput.value).toBe(newCampaign.message);
  });

  it("Allows a user to edit a target segment", () => {
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
