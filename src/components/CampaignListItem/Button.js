import React from "react";
import { Link } from "react-router-dom";

const CampaignListItemButton = ({ status, id }) => {
  return (
    <Link to={`/campaign/${id}`}>
      <button onClick={() => {}}>
        {status === "Sent" ? "View" : "Edit"}
      </button>
    </Link>
  );
};

export default CampaignListItemButton;
