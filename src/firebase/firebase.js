import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider,
} from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
import { app } from './firebaseconfig.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const singIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const singUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const singInGoogle = () => signInWithPopup(auth, provider);

// const db = getFirestore(app);
