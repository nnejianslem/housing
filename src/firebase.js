// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBhUL5iUYk_Q846gINDT2vFbzPWU5Wi9E",
  authDomain: "housing-49100.firebaseapp.com",
  projectId: "housing-49100",
  storageBucket: "housing-49100.appspot.com",
  messagingSenderId: "456928543343",
  appId: "1:456928543343:web:7514b5993ff2ac4f94c39a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()