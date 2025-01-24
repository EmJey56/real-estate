import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKm3VzbRhcrjik9Vtl0sTKD86IdEQomcA",
  authDomain: "myportfolio-82ca9.firebaseapp.com",
  databaseURL: "https://myportfolio-82ca9-default-rtdb.firebaseio.com",
  projectId: "myportfolio-82ca9",
  storageBucket: "myportfolio-82ca9.firebasestorage.app",
  messagingSenderId: "540633704081",
  appId: "1:540633704081:web:af926cf96ca390c9f68130",
  measurementId: "G-MGB8K87NBJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
