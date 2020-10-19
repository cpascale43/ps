import React from "react";
import { Link } from "react-router-dom";

const CampaignListItemButton = ({ status, id }) => {
  let buttonText;
  if (status === "Sent") {
    buttonText = "View";
  } else if (status === "Preview") {
    buttonText = "Edit";
  }

  return (
    <Link to={`/campaign/${id}`}>
      <button onClick={() => {}} className="btn btn-outline-dark">
        {buttonText}
      </button>
    </Link>
  );
};

export default CampaignListItemButton;
