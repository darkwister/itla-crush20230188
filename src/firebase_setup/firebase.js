// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMyWw1gWwgFIVCilWB9sVqmB_A_-91uBc",
  authDomain: "projectofinal-progwebc32024.firebaseapp.com",
  projectId: "projectofinal-progwebc32024",
  storageBucket: "projectofinal-progwebc32024.firebasestorage.app",
  messagingSenderId: "536747893023",
  appId: "1:536747893023:web:f6e285aa6a5e6f6128502a",
  measurementId: "G-J24GFSPWTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {app, analytics, firestore}