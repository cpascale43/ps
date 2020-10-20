import React, { useContext } from "react";

import { CampaignContext } from "../../contexts/campaigns";
import CampaignListItemButton from "./CampaignListItemButton";
import { Badge } from "../FormElements";
import { Button } from "../PageElements";

const CampaignListItem = ({ id, name, status }) => {
  const { removeCampaign } = useContext(CampaignContext);

  return (
    <tr>
      <th scope="row">{name}</th>
      <td>
        <Badge badgeText={status} type={status} />
      </td>
      <td>
        <CampaignListItemButton status={status} id={id} />
        {status === "Preview" ? (
          <Button
            classes={"btn btn-outline-danger ml-2"}
            buttonText={"Delete"}
            onClick={() => removeCampaign(id)}
          />
        ) : null}
      </td>
    </tr>
  );
};

export default CampaignListItem;
