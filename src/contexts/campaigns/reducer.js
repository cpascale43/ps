// action types
export const REMOVE_CAMPAIGN = "REMOVE_CAMPAIGN";
export const ADD_CAMPAIGN = "ADD_CAMPAIGN";
export const EDIT_CAMPAIGN = "EDIT_CAMPAIGN";

// reducer
export default (state, action) => {
  switch (action.type) {
    case REMOVE_CAMPAIGN:
      return {
        ...state,
        campaigns: state.campaigns.filter(
          (campaign) => campaign.id !== action.payload
        ),
      };
    case ADD_CAMPAIGN:
      return {
        ...state,
        campaigns: [...state.campaigns, action.payload],
      };
    case EDIT_CAMPAIGN:
      const updatedCampaign = action.payload;

      const updatedCampaigns = state.campaigns.map((campaign) => {
        if (campaign.id === updatedCampaign.id) {
          return updatedCampaign;
        }
        return campaign;
      });

      return {
        ...state,
        campaigns: updatedCampaigns,
      };
    default:
      return state;
  }
};
