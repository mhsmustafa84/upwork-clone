import { db } from "../../firebase";

export const clientJobsAction = (firstCond, condation, secondCond) => async (dispatch) => {
    try {
        let res = [];
        await db.collection("job")
            .where(firstCond, condation, secondCond).get()
            .then(jobs => jobs.docs.map(doc => doc.data().status !== "private" && res.push({ docID: doc.id, data: doc.data() })))
        dispatch({
            type: "CLIENT_JOBS_DATA",
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};