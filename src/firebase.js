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


const auth = firebaseApp.auth();
const db = firebaseApp.firestore(); 
const storage = firebaseApp.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const appleProvider = new firebase.auth.OAuthProvider("apple.com");

export { auth, db, storage, googleProvider, appleProvider };
export default firebaseApp;
