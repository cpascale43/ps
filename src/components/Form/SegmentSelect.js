import React, { useState, useContext } from "react";

import Column from "../Layout/Column";
import Row from "../Layout/Row";
import Label from "./Label";
import Badge from "./Badge";
import InputFieldContainer from "./InputFieldContainer"
import { SegmentContext } from "../../contexts/segments";

const SegmentOption = ({ ...segment }) => (
  <option value={segment.value}>{segment.name}</option>
);

const SegmentSelect = ({ handleChange }) => {
  const { segments } = useContext(SegmentContext);
  const [selectedSegment, setSelectedSegment] = useState(segments[0]);

  return (
    <InputFieldContainer>
      <Label id={"selectSegment"} labelText={"Segment"} />
      <Row className="form-group">
        <Column>
          <select
            className="form-control"
            id="segmentSelect"
            onChange={(e) => {
              let segment = segments.filter((s) => s.name === e.target.value);
              setSelectedSegment(...segment);
              handleChange("segment_id", segment[0].id.toString());
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
            badgeText={`${selectedSegment.subscribers_count} Members`}
          />
        </Column>
      </Row>
    </InputFieldContainer>
  );
};

export default SegmentSelect;
