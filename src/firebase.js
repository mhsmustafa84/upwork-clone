import { initializeApp } from "firebase/app";
import {
    getAuth,
    OAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

initializeApp({
    apiKey: "AIzaSyBYCGYP-tx6DJKgjd4cNPiYoOC3wNk1cwk",
    authDomain: "final-project-react-12190.firebaseapp.com",
    projectId: "final-project-react-12190",
    storageBucket: "final-project-react-12190.appspot.com",
    messagingSenderId: "1063777536149",
    appId: "1:1063777536149:web:ac906c833922665c00739c",
    measurementId: "G-8BVMCH1W3X",
});

let auth = getAuth();
auth = { ...auth, signInWithEmailAndPassword, createUserWithEmailAndPassword }
const storage = getStorage();
const db = getFirestore();
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider("apple.com");

export {
    auth,
    db,
    storage,
    googleProvider,
    appleProvider
};
