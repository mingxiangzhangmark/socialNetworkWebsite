
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

declare global {
  // eslint-disable-next-line no-var
  var FIREBASE_APPCHECK_DEBUG_TOKEN: boolean |string| undefined;
}


// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCd11BL-uUcQpAzYE520er7lKVMlsdF0IE",
  apiKey:"AIzaSyAWTqppqQ0Ka36mXR6nFjaDKoQ2Pxf0I8Q",
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "social-network-webapp-d5522.firebaseapp.com/__/auth/handler",
  databaseURL: "https://social-network-webapp-d5522-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "social-network-webapp-d5522",
  storageBucket: "social-network-webapp-d5522.appspot.com",
  messagingSenderId: "777738817493",
  appId: "1:777738817493:web:8981f0142d839e115a775c"
};

if(import.meta.env.MODE){
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAppCheck(app,{
  provider: new ReCaptchaV3Provider('6Lf8FxEqAAAAAAOGvE-UtBZk0iPYSGQWq6RtzW71'),
  isTokenAutoRefreshEnabled: true
})


export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const fb = getDatabase(app);