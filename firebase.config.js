import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU8onjAKUJXpmAMP2FXl-LDbL46oUX_Q8",
  authDomain: "larr-5c8b1.firebaseapp.com",
  projectId: "larr-5c8b1",
  storageBucket: "larr-5c8b1.firebasestorage.app",
  messagingSenderId: "679324790500",
  appId: "1:679324790500:web:d4de0bf5f1820060cf86f1"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

