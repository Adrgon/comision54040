
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDObvykneDZG2YO-Rzp6qhlkeDYXYp331I",
  authDomain: "react54040.firebaseapp.com",
  projectId: "react54040",
  storageBucket: "react54040.appspot.com",
  messagingSenderId: "124490791932",
  appId: "1:124490791932:web:b81fb37a7f251ecd069079",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
