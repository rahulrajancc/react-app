// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_axNnTuNiiFa-zAyB6JaN2H4dER0vRR8",
  authDomain: "techchats-4264a.firebaseapp.com",
  projectId: "techchats-4264a",
  storageBucket: "techchats-4264a.appspot.com",
  messagingSenderId: "958769343069",
  appId: "1:958769343069:web:a8493f516a3c805d8f7bb4",
  measurementId: "G-842PK3EMCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;