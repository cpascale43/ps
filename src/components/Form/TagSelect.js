import React, { useState } from "react";

// import Button from "../AddCampaign/Button";
import Column from "../Column";
import Row from "../Row";
import Label from "./Label";

const TagOption = ({ ...tag }) => <option value={tag.value}>{tag.name}</option>;

const TagSelect = ({ handleClick }) => {
  const [selectedTag, setSelectedTag] = useState("{shop_link}");
  const [tagOptions] = useState([
    { id: 0, name: "Shop Link", value: "{shop_link}" },
    { id: 1, name: "Shop Name", value: "{shop_name}" },
    { id: 2, name: "First Name", value: "{first_name}" },
  ]);

  return (
    <div className="form-group">
      <Label id={"selectSegment"} labelText={"Add Tags"} />
      <Row className="form-group">
        <Column>
          <select
            className="form-control"
            id="tagSelect"
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            {tagOptions.map((t) => (
              <TagOption key={t.id} {...t} />
            ))}
          </select>
        </Column>
        <Column>
          <button
            className="btn btn-outline-primary"
            onClick={(e) => {
              e.preventDefault();
              handleClick(selectedTag);
            }}
          >
            Insert Tag
          </button>
          {/* <Button
            classes={"btn btn-outline-primary"}
            onClick={() => handleClick(selectedTag)}
            buttonText={"Insert Tag"}
          /> */}
        </Column>
      </Row>
    </div>
  );
};

export default TagSelect;
