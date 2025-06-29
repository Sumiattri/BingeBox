import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyD3hDSImqvxvrsYgNm2NaHe6v52EvNIrCM",
//   authDomain: "netflix-a7946.firebaseapp.com",
//   projectId: "netflix-a7946",
//   storageBucket: "netflix-a7946.firebasestorage.app",
//   messagingSenderId: "704958908730",
//   appId: "1:704958908730:web:f25f3f8a91598ae408e803",
// };

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
