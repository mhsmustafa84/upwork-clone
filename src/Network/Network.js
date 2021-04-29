import firebaseApp, { db } from "../firebase";

// Create New Document
const createDocument = (collectionName, data) => {
  db.collection(collectionName)
    .add(data)
    .then((res) => {
      console.log("collection added with id: " + res.id);
      localStorage.setItem("docID", res.id);
    })
    .catch((error) => console.log(error));
};

// Update User Data
export const updateUserData = (collectionName, newData) => {
  db.collection(collectionName)
    .get()
    .then((allDocs) => {
      allDocs.forEach((doc) => {
        if (doc.data().authID === firebaseApp.auth().currentUser.uid) {
          db.collection(collectionName)
            .doc(doc.id)
            .update(newData)
            .then(() => console.log("user data updated"))
            .catch(() => console.log("fail to update user data"));
        }
      });
    });
};

// Update Job
export const updateJob = (newData, docID) => {
  db.collection("job")
    .get()
    .then((allDocs) => {
      allDocs.forEach((doc) => {
        if (doc.id === docID) {
          console.log(doc.id);
          db.collection("job")
            .doc(doc.id)
            .update(newData)
            .then(() => console.log("job updated"))
            .catch(() => console.log("fail to update job"));
        }
      });
    });
};

export default createDocument;
