import React from "react";

import CampaignListItemButton from "./CampaignListItemButton";
import Badge from "../Form/Badge";

const CampaignListItem = ({ id, name, status }) => {

  return (
    <tr>
      <th scope="row">{name}</th>
      <td>
        <Badge badgeText={status} type={status} />
      </td>
      <td>
        <CampaignListItemButton status={status} id={id} />
      </td>
    </tr>
  );
};

export default CampaignListItem;
