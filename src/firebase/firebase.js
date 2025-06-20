import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3hDSImqvxvrsYgNm2NaHe6v52EvNIrCM",
  authDomain: "netflix-a7946.firebaseapp.com",
  projectId: "netflix-a7946",
  storageBucket: "netflix-a7946.firebasestorage.app",
  messagingSenderId: "704958908730",
  appId: "1:704958908730:web:f25f3f8a91598ae408e803",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; // ✅ export it for use in components
export default app;
