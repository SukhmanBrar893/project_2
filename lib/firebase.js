import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDDZrf-CQeXgMIvxO-3s-M00Uw50ZfKYk0",
  authDomain: "cprg306-assignments-d1841.firebaseapp.com",
  projectId: "cprg306-assignments-d1841",
  storageBucket: "cprg306-assignments-d1841.firebasestorage.app",
  messagingSenderId: "774432986764",
  appId: "1:774432986764:web:c2f1d98efb280a92578da9",
  measurementId: "G-GBG4P0677Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, auth, db, analytics };