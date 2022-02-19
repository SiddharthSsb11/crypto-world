import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";//check
import "firebase/compat/firestore";//check
import firebaseConfig from "./config/firebaseConfig";

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp); // For Authentication
const db = getFirestore(firebaseApp); // For Using Database

export { auth, db };
