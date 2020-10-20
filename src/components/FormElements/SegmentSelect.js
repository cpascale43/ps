import React, { useState, useContext } from "react";

import { Column, Row } from "../PageElements";
import { Label, Badge, InputFieldContainer } from "./index";
import { SegmentContext } from "../../contexts/segments";

const SegmentOption = ({ ...segment }) => (
  <option value={segment.value}>{segment.name}</option>
);

const SegmentSelect = ({ handleChange, currentSegmentId }) => {
  const { segments } = useContext(SegmentContext);
  const [selectedSegment, setSelectedSegment] = useState(
    !currentSegmentId
      ? segments[0]
      : segments.filter((s) => s.id === currentSegmentId)[0]
  );

  return (
    <InputFieldContainer>
      <Label htmlFor={"selectSegment"} labelText={"Segment"} />
      <Row className="form-group">
        <Column>
          <select
            className="form-control"
            id="selectSegment"
            value={selectedSegment && selectedSegment.name}
            onChange={(e) => {
              let segment = segments.filter((s) => s.name === e.target.value);
              setSelectedSegment(...segment);
              handleChange("segment_id", segment[0].id);
            }}
          >
            {segments.map((s) => (
              <SegmentOption key={s.id} {...s} />
            ))}
          </select>
        </Column>
        <Column>
          <Badge
            type={"Members"}
            badgeText={`${
              selectedSegment && selectedSegment.subscribers_count
            } Members`}
          />
        </Column>
      </Row>
    </InputFieldContainer>
  );
};

export default SegmentSelect;
