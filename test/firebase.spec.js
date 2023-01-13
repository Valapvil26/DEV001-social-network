import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, signOut, // updateProfile,
} from 'firebase/auth';
import {
  addDoc, deleteDoc, onSnapshot, getDoc, updateDoc,
} from 'firebase/firestore';

import {
  signUp,
  updateName,
  signIn,
  signInGoogle,
  addPost,
  onGetPost,
  deletePost,
  getPost,
  updatePost,
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
  // it('ejecuta updateProfile', async () => {
  //   const userName = { displayName: 'Fulanito' };
  //   await updateName(userName);
  //   expect(updateProfile).toHaveBeenCalled();
  // });
});

describe('addPost', () => {
  it('deberia ser una funcion', () => {
    expect(typeof addPost).toBe('function');
  });
  it('ejecuta addDoc ', async () => {
    const date = '10/1/2023, 13:39:48';
    const post = 'comentario de prueba 3500';
    const userId = 'hfTOVE6NyjXKfz5wsyxjhN3aAXH2';
    const userName = 'luisaRojasH';

    await addPost(post, userId, userName, date);
    expect(addDoc).toHaveBeenCalled();
  });
});

describe('onGetPost', () => {
  it('deberia ser una funcion', () => {
    expect(typeof onGetPost).toBe('function');
  });
  it('ejecuta onSnapshot', () => {
    onGetPost();
    expect(onSnapshot).toHaveBeenCalled();
  });
});

describe('deletePost', () => {
  it('deberia ser una funcion', () => {
    expect(typeof deletePost).toBe('function');
  });
  it('ejecuta deleteDoc', async () => {
    const id = 'hfTOVE6NyjXKfz5wsyxjhN3aAXH2';
    deletePost(id);
    expect(deleteDoc).toHaveBeenCalled();
  });
});

describe('getPost', () => {
  it('deberia ser una funcion', () => {
    expect(typeof getPost).toBe('function');
  });
  it('ejecuta getDoc', async () => {
    const id = 'hfTOVE6NyjXKfz5wsyxjhN3aAXH2';
    getPost(id);
    expect(getDoc).toHaveBeenCalled();
  });
});

describe('updatePost', () => {
  it('deberia ser una funcion', () => {
    expect(typeof updatePost).toBe('function');
  });
  it('ejecuta getDoc', async () => {
    const id = 'hfTOVE6NyjXKfz5wsyxjhN3aAXH2';
    const newfields = {
      post: 'Editado',
    };
    updatePost(id, newfields);
    expect(updateDoc).toHaveBeenCalled();
  });
});
