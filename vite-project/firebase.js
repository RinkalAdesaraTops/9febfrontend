// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk-lf-fcwc6ON9O8-JrlNo6c5K064Wzak",
  authDomain: "febproject-1df94.firebaseapp.com",
  projectId: "febproject-1df94",
  storageBucket: "febproject-1df94.firebasestorage.app",
  messagingSenderId: "170132610733",
  appId: "1:170132610733:web:d9ae8e6486c670568df024",
  measurementId: "G-ZK9VQ5Q3KG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}