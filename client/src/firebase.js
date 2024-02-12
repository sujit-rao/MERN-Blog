// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-928ea.firebaseapp.com",
  projectId: "mern-blog-928ea",
  storageBucket: "mern-blog-928ea.appspot.com",
  messagingSenderId: "47380499149",
  appId: "1:47380499149:web:00211854c1a595c7ff3784"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);