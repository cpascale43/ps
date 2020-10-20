import React from "react";
import { render } from "./customRender";
import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

describe("<App />", () => {
  it("Renders <App /> component", () => {
    render(<App />);

    expect(screen.getByRole("heading")).toHaveTextContent("Postscript.io");
    expect(screen.getAllByRole("link")).toHaveLength(7);
    expect(screen.getByText("Create Campaign")).toBeInTheDocument();
  });

  it("Renders <AddCampaignPage /> when Create Campaign button is clicked", () => {
    const { getByText } = render(<App />);

    fireEvent.click(getByText("Create Campaign"));

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });

  it("Renders <CampaignPage /> when a View button is clicked", () => {
    const { getAllByText } = render(<App />);

    const buttons = getAllByText("View");

    expect(buttons).toHaveLength(3);

    fireEvent.click(buttons[0]);

    expect(screen.getByText("CTR:")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("Renders <CampaignPage /> when an Edit button is clicked", () => {
    const { getAllByText } = render(<App />);

    const buttons = getAllByText("Edit");

    expect(buttons).toHaveLength(2);

    fireEvent.click(buttons[0]);

    expect(screen.getByText("Segment")).toBeInTheDocument();
    expect(screen.getByRole("form")).toBeInTheDocument();
  });
});