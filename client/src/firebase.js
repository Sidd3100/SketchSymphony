// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-sketchsymphony.firebaseapp.com",
  projectId: "mern-sketchsymphony",
  storageBucket: "mern-sketchsymphony",
  messagingSenderId: "790548907501",
  appId: "1:790548907501:web:61ae238c15345ad81e93e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
