import { renderWithRouterMatch } from "../customRender";
import "@testing-library/jest-dom/extend-expect";

import CampaignPage from "./CampaignPage";

// CampaignPage renders information about one campaign

describe("<CampaignPage />", () => {
  it("Renders <CampaignPage /> component by id", () => {
    const { getByText } = renderWithRouterMatch(CampaignPage, {
      route: "/campaign/2",
      path: "/campaign/:id",
    });

    expect(getByText("95%")).toBeInTheDocument();
  });
});
