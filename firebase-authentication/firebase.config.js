import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzW5lBTgnYKFt6R6NFp4NTrNqhp7w6odw",
  authDomain: "react-auth-system-f9908.firebaseapp.com",
  projectId: "react-auth-system-f9908",
  storageBucket: "react-auth-system-f9908.firebasestorage.app",
  messagingSenderId: "926676200130",
  appId: "1:926676200130:web:67a99b8840259dfe4de95b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;