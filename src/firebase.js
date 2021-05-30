import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYCGYP-tx6DJKgjd4cNPiYoOC3wNk1cwk",
  authDomain: "final-project-react-12190.firebaseapp.com",
  projectId: "final-project-react-12190",
  storageBucket: "final-project-react-12190.appspot.com",
  messagingSenderId: "1063777536149",
  appId: "1:1063777536149:web:ac906c833922665c00739c",
  measurementId: "G-8BVMCH1W3X",
});

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBBPGPgCccB4UhYkEZokCERfbp1hmFe8BU",
//   authDomain: "final-project-3c172.firebaseapp.com",
//   projectId: "final-project-3c172",
//   storageBucket: "final-project-3c172.appspot.com",
//   messagingSenderId: "74521246195",
//   appId: "1:74521246195:web:8017c290a8aea85e743a86",
//   measurementId: "G-KGP31WZWFS"
// });

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCCdkSGBa4tFyXYrOyfbLkNgrV79l-niEo",
//   authDomain: "limit-test-e3abd.firebaseapp.com",
//   projectId: "limit-test-e3abd",
//   storageBucket: "limit-test-e3abd.appspot.com",
//   messagingSenderId: "871594193084",
//   appId: "1:871594193084:web:89e369a4d708d913ec60b9",
//   measurementId: "G-SYL7207497",
// });

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const appleProvider = new firebase.auth.OAuthProvider("apple.com");

export { auth, db, storage, googleProvider, appleProvider };
export default firebaseApp;
