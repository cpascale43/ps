import "@testing-library/jest-dom/extend-expect";
import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { CampaignContext, CampaignProvider } from "./index";

function App() {
  return (
    <CampaignProvider>
      <Campaign />
    </CampaignProvider>
  );
}

function Campaign() {
  const { campaigns } = useContext(CampaignContext);
  // if there is one element in the array, there are probably more
  if (!campaigns[0]) return "There are no campaigns!";
  return "Indeed, there are campaigns!";
}

test("Campaign returns campaigns from the Campaign Context", () => {
  render(<App />);
  expect(screen.getByText("Indeed, there are campaigns!")).toBeInTheDocument();
});
