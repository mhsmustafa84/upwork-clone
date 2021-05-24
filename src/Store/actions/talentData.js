import { auth, db } from "../../firebase";

export const talentDataAction = () => async (dispatch) => {
    try {
        let res;
        await db.collection("talent").doc(auth?.currentUser?.uid).get()
            .then(doc => {
                res = doc.data();
            });
        dispatch({
            type: "USER_DATA",
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};
