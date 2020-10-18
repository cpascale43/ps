import React from "react";
import { Switch, Route } from "react-router-dom";

import { CampaignProvider } from "./contexts/campaigns";
import { SegmentProvider } from "./contexts/segments";
import { Home, ViewCampaign, AddCampaign } from "./pages";

// {
//   id: number,
//   media: string,
//   name: string,
//   segment_id: number,
//   stats: { sent: number, clicked: number },
//   status: string,
//   text:
//     string,
// };

function App() {
  return (
    <CampaignProvider>
      <SegmentProvider>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/campaign/new" component={AddCampaign} exact />
          <Route path="/campaign/:id" component={ViewCampaign} exact />
        </Switch>
      </SegmentProvider>
    </CampaignProvider>
  );
}

export default App;
