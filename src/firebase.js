import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyAYI5WPF49T0eEalJ-E-SbbzLVA5Pw9c8E",
  authDomain: "linkedin-clone-5d9b5.firebaseapp.com",
  projectId: "linkedin-clone-5d9b5",
  storageBucket: "linkedin-clone-5d9b5.appspot.com",
  messagingSenderId: "384810957020",
  appId: "1:384810957020:web:6fa02cba6193593b57dc19",
};

const app = initializeApp(config);

const db = getFirestore();

export const postsRef = collection(db, "posts");

export const postsQuery = query(postsRef, orderBy("timestamp", "desc"));

export const auth = getAuth(app);

export const storage = getStorage(app);
