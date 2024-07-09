// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "social-network-webapp-d5522.firebaseapp.com",
  projectId: "social-network-webapp-d5522",
  storageBucket: "social-network-webapp-d5522.appspot.com",
  messagingSenderId: "777738817493",
  appId: "1:777738817493:web:8981f0142d839e115a775c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);