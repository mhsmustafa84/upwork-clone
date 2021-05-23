export const jobDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "JOB_DATAILS":
      return action.payload;
    default:
      return state;
  }
};
