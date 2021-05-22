import { db } from "../../firebase";

export const jobDataAction = (jobId) => async (dispatch) => {
    try {
        let res;
        await db.collection("job").doc(jobId).get()
            .then(doc => {
                res = doc.data();
            });
        dispatch({
            type: "JOB_DATA",
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};