// src/firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ add this to use auth

const firebaseConfig = {
  apiKey: "AIzaSyCE90hbhs4jfu1F1-T9ax-EqlZtf7yJpqE",
  authDomain: "netflix-clone-f836e.firebaseapp.com",
  projectId: "netflix-clone-f836e",
  storageBucket: "netflix-clone-f836e.appspot.com", // fixed .app to .app**spot**
  messagingSenderId: "848487806511",
  appId: "1:848487806511:web:000e08e3a5eb37b61c78da",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ initialize auth

export { auth }; // ✅ export it for use in components
export default app;
