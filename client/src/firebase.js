// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "foodrecipe-27bc6.firebaseapp.com",
  projectId: "foodrecipe-27bc6",
  storageBucket: "foodrecipe-27bc6.appspot.com",
  messagingSenderId: "912941206873",
  appId: "1:912941206873:web:658c283590a11b110f9048"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);