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
      const newCampaign = action.payload;
      newCampaign.id = action.id;
      
      return {
        ...state,
        campaigns: [...state.campaigns, newCampaign],
      };
    case EDIT_CAMPAIGN:
      const updateCampaigns = state.campaigns.map((campaign) => {
        if (campaign.id === action.payload.id) {
          return action.payload;
        }
        return campaign;
      });

      return {
        ...state,
        campaigns: updateCampaigns,
      };
    default:
      return state;
  }
};
