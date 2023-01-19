import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const config = {
 apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "clone-linkedin-f69cf.firebaseapp.com",
  projectId: "clone-linkedin-f69cf",
  storageBucket: "clone-linkedin-f69cf.appspot.com",
  messagingSenderId: "511726819135",
  appId: "1:511726819135:web:6c2254157185debbea658a"
};

const app = initializeApp(config);

const db = getFirestore();

export const postsRef = collection(db, "posts");

export const postsQuery = query(postsRef, orderBy("timestamp", "desc"));

export const auth = getAuth(app);

export const storage = getStorage(app);
