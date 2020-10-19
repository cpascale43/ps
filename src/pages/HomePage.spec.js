import React from "react";
import { render } from "../customRender";
import "@testing-library/jest-dom/extend-expect";

import HomePage from "./HomePage";

// HomePage renders a table with 3 columns: Campaign, Status and Action

describe("<HomePage />", () => {
  it("Renders a list of Preview and Sent campaigns", () => {
    const { getByRole, getByText } = render(<HomePage />);

    expect(getByRole("table")).toBeInTheDocument();
    expect(getByText("Campaign")).toBeInTheDocument();
    expect(getByText("Status")).toBeInTheDocument();
    expect(getByText("Action")).toBeInTheDocument();
  });
});
