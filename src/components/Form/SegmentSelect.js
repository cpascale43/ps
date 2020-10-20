import React, { useState, useContext, useEffect } from "react";

import { Column, Row } from "../PageElements";
import { Label, Badge, InputFieldContainer } from "./index";
import { SegmentContext } from "../../contexts/segments";

const SegmentOption = ({ ...segment }) => (
  <option value={segment.value}>{segment.name}</option>
);

const SegmentSelect = ({ handleChange, currentSegmentId }) => {
  const { segments } = useContext(SegmentContext);
  const [selectedSegment, setSelectedSegment] = useState({});

  // grabs the currently selected segment from state
  useEffect(() => {
    let segment = segments.filter((s) => s.id === currentSegmentId);
    setSelectedSegment(...segment);
  }, [currentSegmentId, segments]);

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
            {segments.map((t) => (
              <SegmentOption key={t.id} {...t} />
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
