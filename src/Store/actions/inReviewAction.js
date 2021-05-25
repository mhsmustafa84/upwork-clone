export const inReviewAction = (payload) => ({
  type: "INREVIEW_DATA",
  payload: payload - (20 * payload) / 100,
});
