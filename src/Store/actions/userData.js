import firebaseApp, { db } from "../../firebase";

export const userDataAction = () => async (dispatch) => {
    try {
        let res;
        await db.collection("talent").where("authID", "==", firebaseApp.auth().currentUser.uid).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    res = doc.data();
                })
            });
        dispatch({
            type: "USER_DATA",
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};