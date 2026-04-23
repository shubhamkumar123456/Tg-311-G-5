// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQiaG7ofuHpFN6KYQvcKT7iGR4vtQiAvA",
  authDomain: "g5firebase-55d18.firebaseapp.com",
  projectId: "g5firebase-55d18",
  storageBucket: "g5firebase-55d18.firebasestorage.app",
  messagingSenderId: "123626942595",
  appId: "1:123626942595:web:8d122b52fc476dea97abb6",
  measurementId: "G-13QWLTB96D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const User = collection(db, 'users');

export {User , db }