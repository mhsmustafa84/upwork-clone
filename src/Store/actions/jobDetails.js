import { db } from "../../firebase";

export const jobDetailsAction = (id) => async (dispatch) => {
  try {
    let res;
    await db
      .collection("job")
      .doc(id)
      .get()
      .then((doc) => {
        res = doc.data();
      });
    dispatch({
      type: "JOB_DATAILS",
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};
