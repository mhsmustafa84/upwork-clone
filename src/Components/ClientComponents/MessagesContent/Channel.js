import React, { useEffect, useState } from "react";
import firebaseApp, { db } from "../../../firebase";
import firebase from "firebase/app";

export default function Channel() {
  const [messages, setmessages] = useState([]);
  const [newMessage, setNewMessages] = useState("");
  console.log(newMessage);
  const [user, setuser] = useState({
    uid: "a",
  });
  let urid;
  useEffect(() => {
    if (db) {
      const unsubscribe = db
        .collection("messages")
        .orderBy("createAt")
        .limit(25)
        .onSnapshot((quaerySnapshot) => {
          const data = quaerySnapshot.docs.map((doc) => ({
            ...doc.data(),
            uid: doc.id,
          }));
          // const data = quaerySnapshot.docs.map((res) => {
          //   console.log({ ...res.data() }, res.id);
          // });
          setmessages(data);
        });
      return unsubscribe;
    }
  }, [db]);

  const handleOnChange = (e) => {
    setNewMessages(e.target.value);
    console.log(e.target.value);
  };
  const handleOnSubmit = (e) => {
    // db.collection("messages")
    //   .add({ createAt: "", uid: urid, text: newMessage })
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));
    // db.collection("messages").add({
    //     text: newMessage,
    //     createAt: firebase.firestore.FieldValue.serverTimestamp(),
    //   })
    //   .then((res) => {
    //     debugger;
    //     console.log(res);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     debugger;
    //   });
    //e.preventDefaulte();
    ////
  };
  ////

  return (
    <>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newMessage}
        onChange={handleOnChange}
        placeholder="type here"
      />
      <button onClick={handleOnSubmit} disabled={!newMessage}>
        send
      </button>
    </>
  );
}
