import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, signOut, updateProfile,
} from 'firebase/auth';
import {
  collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc, query, orderBy,
} from 'firebase/firestore';
import { app, db } from './firebaseconfig.js';

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const updateName = (userName) => updateProfile(auth.currentUser, { displayName: userName });
export const signInGoogle = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);

export const addPost = (post, userId, userName, date) => addDoc(collection(db, 'posts'), {
  post, userId, userName, date,
});
export const getPosts = () => getDocs(collection(db, 'posts'));
export const onGetPost = (querySnapshot) => {
  const qPost = query(collection(db, 'posts'), orderBy('date', 'desc'));
  onSnapshot(qPost, querySnapshot);
};
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
export const getPost = (id) => getDoc(doc(db, 'posts', id));
export const updatePost = (id, newfields) => updateDoc(doc(db, 'posts', id), newfields);
