// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "your firebase api add",
  authDomain: "netflix-app-9c714.firebaseapp.com",
  projectId: "netflix-app-9c714",
  storageBucket: "netflix-app-9c714.appspot.com",
  messagingSenderId: "916601213073",
  appId: "1:916601213073:web:43a211d8b1a130022d2f30",
  measurementId: "G-KD7QHGY5PG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
