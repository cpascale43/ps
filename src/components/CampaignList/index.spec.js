import React from "react";
import { render } from "../../customRender";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CampaignList from "./index";
import data from "../../data";

// CampaignList renders a list of all Preview and Sent campaigns

describe("<CampaignList />", () => {
  const campaigns = data.campaigns;
  it("Renders <CampaignList /> component", () => {
    render(<CampaignList campaigns={campaigns} />);

    expect(screen.getAllByRole("link")).toHaveLength(5);
    expect(screen.getByText(/campaign/i)).toBeInTheDocument();
    expect(screen.getByText(/status/i)).toBeInTheDocument();
    expect(screen.getByText(/action/i)).toBeInTheDocument();
  });

  it("Renders `No campaigns yet!` if there are no campaigns", () => {
    render(<CampaignList />);

    expect(screen.getByText("No campaigns yet!")).toBeInTheDocument();
  });

  it("Renders a list of campaigns if there are campaigns", () => {
    const newCampaigns = [
      { id: 0, name: "Campaign1", status: "Preview" },
      { id: 1, name: "Campaign2", status: "Sent" },
      { id: 2, name: "Campaign3", status: "Preview" },
    ];

    render(<CampaignList campaigns={newCampaigns} />);

    expect(screen.getAllByRole("link")).toHaveLength(3);
    expect(screen.getAllByText(/preview/i)).toHaveLength(2);
    expect(screen.getAllByText(/sent/i)).toHaveLength(1);
  });
});
