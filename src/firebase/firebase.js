import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider,
} from 'firebase/auth';
import {
  collection, addDoc, getDocs,
} from 'firebase/firestore';
import { app, db } from './firebaseconfig.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const singIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const singUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const singInGoogle = () => signInWithPopup(auth, provider);

export const addPost = (post) => addDoc(collection(db, 'posts'), { post });
export const getPost = () => getDocs(collection(db, 'posts'));
