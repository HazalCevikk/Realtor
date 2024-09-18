import { getApp, getApps, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyBCnVQESCFMwiAT3HIPzyWVfSH8Oa70uww",
  authDomain: "hotel-site-5b78c.firebaseapp.com",
  projectId: "hotel-site-5b78c",
  storageBucket: "hotel-site-5b78c.appspot.com",
  messagingSenderId: "755353554220",
  appId: "1:755353554220:web:13d48f9e2874c709b5f089",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

