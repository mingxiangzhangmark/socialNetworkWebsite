
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd11BL-uUcQpAzYE520er7lKVMlsdF0IE",
  authDomain: "social-network-webapp-d5522.firebaseapp.com/__/auth/handler",
  projectId: "social-network-webapp-d5522",
  storageBucket: "social-network-webapp-d5522.appspot.com",
  messagingSenderId: "777738817493",
  appId: "1:777738817493:web:8981f0142d839e115a775c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);