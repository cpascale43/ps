import React, { createContext, useReducer } from "react";

import campaignReducer, {
  REMOVE_CAMPAIGN,
  ADD_CAMPAIGN,
  EDIT_CAMPAIGN,
} from "./reducer";
import data from "../../data";

// {
//   id: number,
//   media: string,
//   name: string,
//   segment_id: number,
//   stats: { sent: number, clicked: number },
//   status: string,
//   text:
//     string,
// };

const initialState = data;

export const CampaignContext = createContext(initialState);
export const CampaignProvider = ({ children }) => {
  const [state, dispatch] = useReducer(campaignReducer, initialState);

  const removeCampaign = (id) => {
    dispatch({
      type: REMOVE_CAMPAIGN,
      payload: id,
    });
  };

  const addCampaign = (campaign) => {
    dispatch({
      type: ADD_CAMPAIGN,
      id: state.campaigns.length + 1 || 1,
      payload: campaign,
    });
  };

  const editCampaign = (campaign) => {
    dispatch({
      type: EDIT_CAMPAIGN,
      payload: campaign,
    });
  };

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
