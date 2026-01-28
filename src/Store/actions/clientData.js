import { auth, db } from "../../firebase";

export const clientDataAction = () => async (dispatch) => {
    try {
        let res;
        await db.collection("client").doc(auth?.currentUser?.uid).get()
            .then(doc => {
                res = doc.data();
            });
        dispatch({
            type: "CLIENT_DATA",
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};