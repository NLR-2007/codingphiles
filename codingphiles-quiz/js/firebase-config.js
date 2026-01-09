import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBSGtLrPDsQspV5VculhPZFgdZ8U7UqGfI",
  authDomain: "codingphiles.firebaseapp.com",
  projectId: "codingphiles",
  storageBucket: "codingphiles.firebasestorage.app",
  messagingSenderId: "498853832402",
  appId: "1:498853832402:web:17f9da41f5f16c37542f0b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
