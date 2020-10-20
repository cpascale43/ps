import React from "react";
import { render } from "../customRender";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CampaignView from "./CampaignView";

describe("<CampaignView />", () => {
  it("Renders <CampaignView /> component", () => {
    render(<CampaignView id={3} />);

    expect(
      screen.getByText(/cotton candy palette announcement/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/ctr/i)).toBeInTheDocument();
  });

  it("Renders an error if there is no campaign", () => {
    render(<CampaignView id={6} />);

    expect(screen.getByText("Oops, something happened!")).toBeInTheDocument();
  });

  it("Renders <EditCampaign /> if a 'Preview' campaign is passed down", () => {
    render(<CampaignView id={4} />);

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("Renders <DisplayCampaign /> if a 'Sent' campaign is passed down", () => {
    render(<CampaignView id={1} />);

    expect(screen.getByText(/ctr/i)).toBeInTheDocument();
    expect(screen.getByText(/fourth of july promo/i)).toBeInTheDocument();
  });
});
