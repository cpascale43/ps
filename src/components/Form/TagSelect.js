import React, { useState } from "react";

import Button from "../PageElements/Button";
import Column from "../Layout/Column";
import Row from "../Layout/Row";
import InputFieldContainer from "./InputFieldContainer";
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
    <InputFieldContainer>
      <Label id={"selectSegment"} labelText={"Tags"} />
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
          <Button
            classes={"btn btn-outline-primary"}
            onClick={(e) => {
              e.preventDefault();
              handleClick(selectedTag);
            }}
            buttonText={"Insert Tag"}
          />
        </Column>
      </Row>
    </InputFieldContainer>
  );
};

export default TagSelect;
