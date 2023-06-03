
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMCvIEgaj7_5PmW8mtSD4clEQGLmjCrrQ",
  authDomain: "house-marketplace-app-14649.firebaseapp.com",
  projectId: "house-marketplace-app-14649",
  storageBucket: "house-marketplace-app-14649.appspot.com",
  messagingSenderId: "694163453402",
  appId: "1:694163453402:web:757b1bc9e0e3a00e7ebce3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();