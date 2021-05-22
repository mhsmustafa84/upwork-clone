import { db } from "../../firebase";

export const jobsDataAction = () => async (dispatch) => {
    try {
        let res = [];
        db.collection("job").where("status", "==", "public").onSnapshot(jobs =>
            jobs.docs.map(item => res.push(item.data()))
        )
        dispatch({
            type: "JOBS_DATA",
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};


