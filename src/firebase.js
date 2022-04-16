import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    onIdTokenChanged,
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { firbaseConfig } from './firebaseConfig';

initializeApp(firbaseConfig);

const auth = getAuth();
const storage = getStorage();
const db = getFirestore();

const fbAuth = {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    onIdTokenChanged,
};

export { fbAuth, db, storage };
