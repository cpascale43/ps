import React from "react";

import CampaignListItem from "./CampaignListItem";

const CampaignList = ({ ...props }) => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Campaign</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.campaigns.map((c) => (
          <CampaignListItem key={c.id} {...c} />
        ))}
      </tbody>
    </table>
  );
};

export default CampaignList;
