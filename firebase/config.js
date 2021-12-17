import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD-eM3Kj_-wOXjwlk4kS01PVLSCupH2Rko",
  authDomain: "smart-home-3f1de.firebaseapp.com",
  databaseURL: "https://smart-home-3f1de-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smart-home-3f1de",
  storageBucket: "smart-home-3f1de.appspot.com",
  messagingSenderId: "618101399005",
  appId: "1:618101399005:web:175f3cf3d2802b3393ea34",
  measurementId: "G-S6NHV5M4X6"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
