import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCwpVMIzZhLF_Y6_vwvB1MEdm7OfcpA88",
  authDomain: "rukky-radiance.firebaseapp.com",
  databaseURL: "https://rukky-radiance-default-rtdb.firebaseio.com",
  projectId: "rukky-radiance",
  storageBucket: "rukky-radiance.appspot.com",
  messagingSenderId: "1014332260174",
  appId: "1:1014332260174:web:4f85dac5c9827de265281f",
  measurementId: "G-HBE98V8PZG"
};

export const app = initializeApp(firebaseConfig);
export const auth= getAuth();