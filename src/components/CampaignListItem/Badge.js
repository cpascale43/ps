import React from "react";

const Badge = ({ badgeText }) => {
  if (badgeText === "Sent") {
    return <span className="badge badge-success">{badgeText}</span>;
  } else if (badgeText === "Preview") {
    return <span className="badge badge-secondary">{badgeText}</span>;
  }
};

export default Badge;
