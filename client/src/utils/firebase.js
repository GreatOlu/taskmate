// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "itaskmate.firebaseapp.com",
  projectId: "itaskmate",
  storageBucket: "itaskmate.firebasestorage.app",
  messagingSenderId: "313485820185",
  appId: "1:313485820185:web:bf4be22d07134eda08c588"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);