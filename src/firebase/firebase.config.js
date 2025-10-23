// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXi7UfY5rEclv9PleY6at_gkcFHiueOvo",
  authDomain: "skill-swap-aa1db.firebaseapp.com",
  projectId: "skill-swap-aa1db",
  storageBucket: "skill-swap-aa1db.firebasestorage.app",
  messagingSenderId: "881506415238",
  appId: "1:881506415238:web:7353312c38be7680acd707"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);