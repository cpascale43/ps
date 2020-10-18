import React, { createContext, useReducer } from "react";

import campaignState, {
  REMOVE_CAMPAIGN,
  ADD_CAMPAIGN,
  EDIT_CAMPAIGN,
} from "./reducer";
import data from "../../data";

const initialState = data;

export const CampaignContext = createContext(initialState);
export const CampaignProvider = ({ children }) => {
  const [state, dispatch] = useReducer(campaignState, initialState);

  function removeCampaign(id) {
    dispatch({
      type: REMOVE_CAMPAIGN,
      payload: id,
    });
  }

  function addCampaign(campaigns) {
    dispatch({
      type: ADD_CAMPAIGN,
      payload: campaigns,
    });
  }

  function editCampaign(campaigns) {
    dispatch({
      type: EDIT_CAMPAIGN,
      payload: campaigns,
    });
  }

  return (
    <CampaignContext.Provider
      value={{
        campaigns: state.campaigns,
        removeCampaign,
        addCampaign,
        editCampaign,
      }}
    >
      {children}
    </CampaignContext.Provider>
  );
};
