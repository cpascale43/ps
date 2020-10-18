import React, { createContext } from "react";

import data from "../../data";

export const SegmentContext = createContext(data);
export const SegmentProvider = ({ children }) => {
  return (
    <SegmentContext.Provider
      value={{
        segments: data.segments,
      }}
    >
      {children}
    </SegmentContext.Provider>
  );
};