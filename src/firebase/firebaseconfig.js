import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
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
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
