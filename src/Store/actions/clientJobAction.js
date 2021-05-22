import { db } from "../../firebase";

export const clientJobsAction = (collectionName,firstCond,condation,secondCond) => async (dispatch) => {
    try {
        let res = [];
        db.collection(collectionName)
        .where(firstCond, condation, secondCond).get()
        .then(jobs=>jobs.docs.map(item => res.push(item.data())))
        dispatch({
            type: "CLIENT_JOBS_DATA",
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};