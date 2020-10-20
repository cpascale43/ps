// tests to see if we get the correct output in our JSX based on the reducer state
// per: https://testing-library.com/docs/example-react-hooks-usereducer

import campaignReducer, {
  ADD_CAMPAIGN,
  EDIT_CAMPAIGN,
  REMOVE_CAMPAIGN,
} from "./reducer";

describe("Campaign Reducer", () => {
  it("adds a new campaign to state", () => {
    const testCampaign = {
      id: 0,
      name: "Test Campaign",
      text: "Hi, I'm a test campaign!",
    };
    const prevState = {
      campaigns: [],
    };

    const state = campaignReducer(prevState, {
      type: ADD_CAMPAIGN,
      id: 0,
      payload: testCampaign,
    });

    expect(state).toEqual({
      campaigns: [
        {
          id: 0,
          name: "Test Campaign",
          text: "Hi, I'm a test campaign!",
        },
      ],
    });
  });

  it("edits a campaign on state", () => {
    const prevState = {
      campaigns: [
        {
          id: 0,
          name: "Test Campaign",
          text: "Hi, I'm a test campaign!",
        },
      ],
    };

    const editedCampaignText = "Hi, my message has been changed!";
    const editedCampaign = prevState.campaigns[0];
    editedCampaign.text = editedCampaignText;

    const state = campaignReducer(prevState, {
      type: EDIT_CAMPAIGN,
      payload: editedCampaign,
    });

    expect(state).toEqual({
      campaigns: [
        {
          id: 0,
          name: "Test Campaign",
          text: "Hi, my message has been changed!",
        },
      ],
    });
  });

  it("removes a campaign from state", () => {
    const prevState = {
      campaigns: [
        {
          id: 0,
          name: "Test Campaign",
          text: "Hi, I'm a test campaign!",
        },
      ],
    };

    const state = campaignReducer(prevState, {
      type: REMOVE_CAMPAIGN,
      payload: 0,
    });

    expect(state).toEqual({
      campaigns: [],
    });
  });
});
