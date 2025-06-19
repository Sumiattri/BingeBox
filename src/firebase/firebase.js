// // src/firebase/firebase.js

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"; // ✅ add this to use auth

// const firebaseConfig = {
//   apiKey: "AIzaSyCE90hbhs4jfu1F1-T9ax-EqlZtf7yJpqE",
//   authDomain: "netflix-clone-f836e.firebaseapp.com",
//   projectId: "netflix-clone-f836e",
//   //   storageBucket: "netflix-clone-f836e.appspot.com", // fixed .app to .app**spot**
//   storageBucket: "netflix-clone-f836e.firebasestorage.app",
//   messagingSenderId: "848487806511",
//   appId: "1:848487806511:web:000e08e3a5eb37b61c78da",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app); // ✅ initialize auth

// export { auth }; // ✅ export it for use in components
// export default app;

// Import the functions you need from the SDKs you need
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
