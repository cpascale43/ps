import React from "react";
import { render } from "../customRender";
import "@testing-library/jest-dom/extend-expect";

import AddCampaignPage from "./AddCampaignPage";

// HomePage renders a form which is used to save a new campaign on state

describe("<AddCampaignPage />", () => {
  it("Renders a form", () => {
    const { getByRole } = render(<AddCampaignPage />);

    expect(getByRole("form")).toBeInTheDocument();
  });
});
