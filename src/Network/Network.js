import firebaseApp, { db } from "../firebase";

// Create New Document - auto id
const createDocument = (collectionName, data) => {
  db.collection(collectionName)
    .add(data)
    .then(res => {
      console.log("Document added in " + collectionName + " collection with id: " + res.id);
      collectionName === "job" && localStorage.setItem("docID", res.id);
    })
    .catch(error => console.log(error));
};

// Create New Document - auto id
export const createDocumentWithId = (collectionName, data, id) => {
  db.collection(collectionName)
    .doc(id).set(data)
    .then(res => {
      console.log("Document added in " + collectionName + " collection with id: " + res.id);
    })
    .catch((error) => console.log(error));
};

// Update User Data
export const updateUserData = (collectionName, newData) => {
  db.collection(collectionName)
    .get()
    .then(allDocs => {
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
    .doc(docID)
    .update(newData)
    .then(() => console.log("job updated"))
    .catch(() => console.log("fail to update job"));
};


export default createDocument;
