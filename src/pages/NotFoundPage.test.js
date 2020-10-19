import React from "react";
import { render } from "../customRender";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import NotFoundPage from "./NotFoundPage";

// NotFoundPage renders whenever a user tries to access an undefined route

describe("<NotFoundPage />", () => {
  it("Renders a link to go back to the homescreen", () => {
    const { getAllByRole } = render(<NotFoundPage />);

    const links = getAllByRole("link");

    expect(links).toHaveLength(3);
    expect(screen.getByText("Go Home")).toBeInTheDocument();
  });
});
