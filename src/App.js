import React from "react";
import { Switch, Route } from "react-router-dom";

import { CampaignProvider } from "./contexts/campaigns";
import { SegmentProvider } from "./contexts/segments";
import { HomePage, CampaignPage, AddCampaignPage, NotFoundPage } from "./pages";

function App() {
  return (
    <CampaignProvider>
      <SegmentProvider>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/campaign/new" component={AddCampaignPage} exact />
          <Route path="/campaign/:id" component={CampaignPage} exact />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </SegmentProvider>
    </CampaignProvider>
  );
}

export default App;
