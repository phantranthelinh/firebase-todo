import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC_vE_lZAWsCbunCbcw1yddDAqP0vDUzg8",
  authDomain: "todo-af4d7.firebaseapp.com",
  projectId: "todo-af4d7",
  storageBucket: "todo-af4d7.appspot.com",
  messagingSenderId: "1077997614931",
  appId: "1:1077997614931:web:d188da929c87f4480253a6",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
