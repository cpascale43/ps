// creates higher-order components to wrap any component under test in a Provider and/or a Router

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { CampaignProvider } from "./contexts/campaigns";
import { SegmentProvider } from "./contexts/segments";

// https://testing-library.com/docs/example-react-router
export function renderWithRouterMatch(
  ui,
  {
    path = "/",
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(
      <Router history={history}>
        <Route path={path} component={ui} />
      </Router>
    ),
  };
}

const Wrapper = ({ children }) => {
  return (
    <CampaignProvider>
      <SegmentProvider>
        <MemoryRouter>{children}</MemoryRouter>
      </SegmentProvider>
    </CampaignProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-exports everything
export * from "@testing-library/react";

// overrides render method
export { customRender as render };
