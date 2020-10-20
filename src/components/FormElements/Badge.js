import React from "react";

const Badge = ({ badgeText, type }) => {
  if (type === "Sent") {
    return <span className="badge badge-success">{badgeText}</span>;
  } else if (type === "Preview") {
    return <span className="badge badge-secondary">{badgeText}</span>;
  } else if (type === "Members") {
    return <span className="badge badge-dark">{badgeText}</span>;
  }
};

export default Badge;
