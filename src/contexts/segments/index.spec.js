import "@testing-library/jest-dom/extend-expect";
import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { SegmentContext, SegmentProvider } from "./index";

function App() {
  return (
    <SegmentProvider>
      <Segment />
    </SegmentProvider>
  );
}

function Segment() {
  const { segments } = useContext(SegmentContext);
  // if there is one element in the array, there are probably more
  if (!segments[0]) return "There are no segments!";
  return "Indeed, there are segments!";
}

describe("CampaignContext", () => {
  it("Returns segments from the Campaign Context", () => {
    render(<App />);
    expect(screen.getByText("Indeed, there are segments!")).toBeInTheDocument();
  });
});
