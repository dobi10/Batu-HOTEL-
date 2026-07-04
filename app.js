import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

// 🔥 Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDhsqdbW9C4e_wQ1XCkjghmlUnugCV1S-s",
  authDomain: "batu-hotel-f00fd.firebaseapp.com",
  projectId: "batu-hotel-f00fd",
  storageBucket: "batu-hotel-f00fd.appspot.com",
  messagingSenderId: "60513617208",
  appId: "1:60513617208:web:5d8d3020b95d048144edcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const db = getFirestore(app);
export const auth = getAuth(app);
