import { db } from "../../firebase";

export const talentsDataAction = () => async (dispatch) => {
    try {
        let res = [];
        await db.collection("talent")
            .get().then(tal =>
                tal.docs.map(item => res.push(item.data()))
            )
        dispatch({
            type: "TALENTS_DATA",
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};


