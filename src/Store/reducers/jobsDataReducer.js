export const jobsDataReducer = (state = [], action) => {
  switch (action.type) {
    case "JOBS_DATA":
      return action.payload;
    default:
      return state;
  }
};
