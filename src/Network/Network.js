import { auth, db } from "../firebase";
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
  if (id) {
    db.collection(collectionName)
      .doc(id).set(data)
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
// new proposal
export const addProposal = (data, jobId) => {
  db.collection('job')
  .doc(jobId)
  .collection('proposals')
  .add(data)
  .then((res)=>console.log(res,'add new proposal'))
  .catch((e)=>console.log(e))
};

export const getCurrentUser = async () => {
  return auth.currentUser;
}

//getJobData
export const getJobData = async (jobId)=>{

  const res=db.collection('job');
  const data =await res.doc(jobId).get().then((res)=>res.data())

 return data;
}

 
  
 

export default createDocument;
