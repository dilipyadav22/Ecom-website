// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgZ4uIFPK80mnfG1VdUE6M8Zr8Kjn-n0U",
  authDomain: "e-commerce-80a38.firebaseapp.com",
  projectId: "e-commerce-80a38",
  storageBucket: "e-commerce-80a38.firebasestorage.app",
  messagingSenderId: "437277378669",
  appId: "1:437277378669:web:be1e542d072d42bc271764",
  measurementId: "G-8DN3W6PF9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
