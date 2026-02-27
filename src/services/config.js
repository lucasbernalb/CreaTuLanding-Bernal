import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reina-artura.firebaseapp.com",
  projectId: "reina-artura",
  storageBucket: "reina-artura.firebasestorage.app",
  messagingSenderId: "705659099",
  appId: "1:705659099:web:da75a43d4801263808ccfe"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)