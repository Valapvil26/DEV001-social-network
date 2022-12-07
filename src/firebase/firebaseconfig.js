// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCbLkSWP5_Kzg7sUv6p1a9mmTTyHFRV4jE',
  authDomain: 'social-network-35d30.firebaseapp.com',
  projectId: 'social-network-35d30',
  storageBucket: 'social-network-35d30.appspot.com',
  messagingSenderId: '1002970472199',
  appId: '1:1002970472199:web:bf7c054a42493481026fa2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const singIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
