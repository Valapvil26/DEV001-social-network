import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, // getAuth,
  signInWithPopup, signOut, updateProfile, // GoogleAuthProvider,
} from 'firebase/auth';
import {
// auth, // collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc, orderBy,
} from 'firebase/firestore';
// import { app, db } from '../src/firebase/firebaseconfig.js';

import {
  signUp,
  updateName,
  signIn,
  signInGoogle,
  // addPost,
  // onGetPost,
  // deletePost,
  // getPost,
  // updatePost,
  logOut,
} from '../src/firebase/firebase.js';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');
jest.mock('../src/firebase/firebaseconfig.js');

describe('signUp', () => {
  it('debería ser una función', () => {
    expect(typeof signUp).toBe('function');
  });
  it('ejecuta createUserWithEmailAndPassword', async () => {
    const email = 'correodeprueba@gmail.com';
    const password = 'Prueba123';
    await signUp(email, password);
    expect(email).toBe('correodeprueba@gmail.com');
    expect(password).toBe('Prueba123');
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});

describe('signIn', () => {
  it('deberia ser una funcion', () => {
    expect(typeof signIn).toBe('function');
  });
  it('ejecuta signInWithEmailAndPassword', async () => {
    const email = 'correodeprueba@gmail.com';
    const password = 'Prueba123';
    await signIn(email, password);
    expect(email).toBe('correodeprueba@gmail.com');
    expect(password).toBe('Prueba123');
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
});

describe('signInGoogle', () => {
  it('deberia ser una funcion', () => {
    expect(typeof signInGoogle).toBe('function');
  });
  it('ejecuta signInWithPopup', async () => {
    await signInGoogle();
    expect(signInWithPopup).toHaveBeenCalled();
  });
});

describe('logOut', () => {
  it('deberia ser una funcion', () => {
    expect(typeof logOut).toBe('function');
  });
  it('ejecuta signOut', async () => {
    await logOut();
    expect(signOut).toHaveBeenCalled();
  });
});

describe('updateName', () => {
  it('deberia ser una funcion', () => {
    expect(typeof updateName).toBe('function');
  });
  it('ejecuta updateProfile', async () => {
    const userName = 'usuario prueba';
    await updateName(userName);
    expect(userName).toBe('usuario prueba');
    expect(updateProfile).toHaveBeenCalled();
  });
});
