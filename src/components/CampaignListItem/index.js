import React from "react";

import CampaignListItemButton from "./Button";

const CampaignListItem = ({ id, name, status }) => {
  return (
    <tr>
      <th scope="row">{name}</th>
      <td>
        <span>{status}</span>
      </td>
      <td>
        <CampaignListItemButton status={status} id={id} />
      </td>
    </tr>
  );
};

export default CampaignListItem;