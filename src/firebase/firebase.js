import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGEY0Uy6ZMzOcAALKYLz7pa9FcQbMFnEY",
  authDomain: "netflix-2-3a381.firebaseapp.com",
  projectId: "netflix-2-3a381",
  storageBucket: "netflix-2-3a381.firebasestorage.app",
  messagingSenderId: "638466750396",
  appId: "1:638466750396:web:4447ae9c3cfc5bb2929db9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; // ✅ export it for use in components
export default app;

import { getApps } from "firebase/app";
console.log("Connected Firebase App:", getApps()[0]?.options.projectId);
