import React, { useState } from "react";

const TagSelect = ({ handleClick }) => {
  const [selectedTag, setSelectedTag] = useState({});
  const [tagOptions] = useState([
    { id: 0, name: "shop_link" },
    { id: 1, name: "shop_name" },
    { id: 2, name: "first_name" },
  ]);

  return (
    <div className="form-group">
      <label htmlFor="selectSegment">Add Tags</label>
      <select
        className="form-control"
        id="tagSelect"
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        {tagOptions.map((t) => (
          <option key={t.id} value={t.name}>
            {t.name}
          </option>
        ))}
      </select>
      <button onClick={() => handleClick(selectedTag)}>Insert Tag</button>
    </div>
  );
};

export default TagSelect;
