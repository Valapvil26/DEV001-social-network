import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider,
} from 'firebase/auth';
import {
  collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc,
} from 'firebase/firestore';
import { app, db } from './firebaseconfig.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const singIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const singUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const singInGoogle = () => signInWithPopup(auth, provider);

export const addPost = (post) => addDoc(collection(db, 'posts'), { post });
export const getPosts = () => getDocs(collection(db, 'posts'));
export const onGetPost = (callback) => onSnapshot(collection(db, 'posts'), callback);
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
export const getPost = (id) => getDoc(doc(db, 'posts', id));
export const updatePost = (id, newfields) => updateDoc(doc(db, 'posts', id), newfields);
