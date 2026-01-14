import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBb-JX_KK7U2LTUm31RUB13tif7cypU_5c",
  authDomain: "hackathon-a6db3.firebaseapp.com",
  projectId: "hackathon-a6db3",
  storageBucket: "hackathon-a6db3.firebasestorage.app",
  messagingSenderId: "746678210334",
  appId: "1:746678210334:web:492c77b146f9f84a3f430f",
  measurementId: "G-E84S56SDQ0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);