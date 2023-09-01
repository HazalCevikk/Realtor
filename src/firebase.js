import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyBCnVQESCFMwiAT3HIPzyWVfSH8Oa70uww",
  authDomain: "hotel-site-5b78c.firebaseapp.com",
  projectId: "hotel-site-5b78c",
  storageBucket: "hotel-site-5b78c.appspot.com",
  messagingSenderId: "755353554220",
  appId: "1:755353554220:web:13d48f9e2874c709b5f089",
};

const firebaseApp = createFirebaseApp(firebaseConfig);
export const db = getFirestore();
