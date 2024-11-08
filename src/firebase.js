// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWsALej9unBHnumX4bMoDhWYuBzwUqs5E",
  authDomain: "ecommerce-app-c727a.firebaseapp.com",
  projectId: "ecommerce-app-c727a",
  storageBucket: "ecommerce-app-c727a.firebasestorage.app",
  messagingSenderId: "180929586606",
  appId: "1:180929586606:web:e614cef30e0de5a614943f",
  measurementId: "G-4ZH1YK3MW2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, googleProvider, signInWithPopup };
