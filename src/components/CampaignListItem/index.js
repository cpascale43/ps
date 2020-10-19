import React from "react";

import CampaignListItemButton from "./Button";
import Badge from "./Badge";

const CampaignListItem = ({ id, name, status }) => {
  return (
    <tr>
      <th scope="row">{name}</th>
      <td>
        <Badge badgeText={status} />
      </td>
      <td>
        <CampaignListItemButton status={status} id={id} />
      </td>
    </tr>
  );
};

export default CampaignListItem;
