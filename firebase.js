// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDCxC3h-9Blw4fFOKRIk0qRVkzbszzYPIA",
  authDomain: "tinder-clone-5338f.firebaseapp.com",
  databaseURL: "https://tinder-clone-5338f.firebaseio.com",
  projectId: "tinder-clone-5338f",
  storageBucket: "tinder-clone-5338f.appspot.com",
  messagingSenderId: "418865958255",
  appId: "1:418865958255:web:542da3fbf7bf7d21abec9a",
  measurementId: "G-0D0FLWFLLW",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
