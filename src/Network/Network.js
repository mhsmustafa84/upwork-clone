import { auth, db } from "../firebase";

// Create New Document - auto id
const createDocument = (collectionName, data) => {
  db.collection(collectionName)
    .add(data)
    .then((res) => {
      console.log(
        "Document added in " + collectionName + " collection with id: " + res.id
      );
      collectionName === "job" && localStorage.setItem("docID", res.id);
    })
    .catch((error) => console.log(error));
};

// Create New Document - auto id
export const createDocumentWithId = (collectionName, data, id) => {
  if (id) {
    db.collection(collectionName)
      .doc(id)
      .set(data)
      .then(() => {
        console.log("Document added in " + collectionName);
      })
      .catch((error) => console.log(error));
  }
};

// Update User Data
export const updateUserData = (collectionName, newData) => {
  db.collection(collectionName)
    .doc(auth.currentUser.uid)
    .update(newData)
    .then(() => console.log("user data updated"))
    .catch(() => console.log("fail to update user data"));
};

// Update Job
export const updateJob = (newData, docID) => {
  db.collection("job")
    .doc(docID)
    .update(newData)
    .then(() => console.log("job updated"))
    .catch((err) => console.log("fail to update job", err));
};

// get Collection Docs
export const getCollectionDocs = collectionName => {
  return db.collection(collectionName).get();
};

// get Document by doc id
// export const getDocumentByDocID = async (collectionName, docID) => {
//   let docData;
//   await db.collection(collectionName).doc(docID).get().then(doc => docData = doc.data())
//   console.log(docData);
//   return docData;
// };

// new proposal
export const subCollection = (
  collectionName,
  subCollectionName,
  data,
  docId
) => {
  db.collection(collectionName)
    .doc(docId)
    .collection(subCollectionName)
    .add(data)
    .then((res) => console.log(res.id, "add new subCollection"))
    .catch((e) => console.log(e));
};

export const deletesubCollection = (
  collectionName,
  subCollectionName,
  docId,
  docIds
) => {
  db.collection(collectionName)
    .doc(docId)
    .collection(subCollectionName)
    .doc(docIds)
    .delete()
    .then(() => console.log("document deleted"))
    .catch((e) => console.log(e));
};

//getJobData
export const getJobData = async (jobId) => {
  const res = db.collection("job");
  const data = await res
    .doc(jobId)
    .get()
    .then((res) => res.data());

  return data;
};


export const savedjobs = (text,setText,id,user) => {
  if (text === "Saved Job") {
    updateUserData("talent", { savedJobs: [...user?.savedJobs, id] });
    text = "Unsave Job";
    setText(text);
    console.log(user?.savedJobs?.length);
  } else {
    user?.savedJobs?.forEach((item, index) => {
      if (item === id) {
        user?.savedJobs?.splice(index, 1);
        updateUserData("talent", { savedJobs: [...user?.savedJobs] });
        console.log(user?.savedJobs);
        text = "Saved Job";
        setText(text);
        console.log(text);
      }
     });
  }
};
 export const changeSavedJobsText =(text, setText, id,user)=>
 {
if (user?.savedJobs?.length > 0) {
  user?.savedJobs?.forEach((item) => {
    if (item === id) {
      text = "Unsave Job";
      setText(text);
    } else {
      text = "Saved Job";
      setText(text);
    }
  });
} else {
  text = "Saved Job";
  setText(text);
}
 }
export default createDocument;
