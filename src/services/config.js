
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChFcqkCU1ip-0e7x9o3UeIR4VkOetgq_A",
  authDomain: "reina-artura.firebaseapp.com",
  projectId: "reina-artura",
  storageBucket: "reina-artura.firebasestorage.app",
  messagingSenderId: "705659099",
  appId: "1:705659099:web:da75a43d4801263808ccfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)