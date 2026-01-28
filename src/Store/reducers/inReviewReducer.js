export const inReviewReducer = (state = 0, action) => {
  switch (action.type) {
    case "INREVIEW_DATA":
      return action.payload;
    default:
      return state;
  }
};
