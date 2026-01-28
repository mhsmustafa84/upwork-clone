import { auth, db } from "../../firebase";

export const talentDataAction = () => (dispatch) => {
    try {
        let res;
        db.collection("talent")
            .doc(auth?.currentUser?.uid)
            .onSnapshot(doc => {
                res = doc.data();
                dispatch({
                    type: "USER_DATA",
                    payload: res,
                });
            });

    } catch (err) {
        console.log(err);
    }
};
