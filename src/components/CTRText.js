import React from "react";

const CTRText = ({ clicked, sent }) => {
  const getCTR = (clicked, sent) => {
    if (!clicked || !sent) return "0";
    return Math.floor((clicked / sent) * 100);
  };
  return (
    <span>
      <span style={{ fontWeight: "bold" }}>CTR:</span> {getCTR(clicked, sent)}%
    </span>
  );
};

export default CTRText;
