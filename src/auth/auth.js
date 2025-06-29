import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

import { auth } from "../firebase/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firestoreUtils";

export async function signUp(email, password) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  console.log(user);

  // Optional: set display name if you want
  await updateProfile(user, { displayName: user.email });
  console.log(user);

  // Create user doc in Firestore
  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    createdAt: serverTimestamp(),
  });
  try {
    await sendEmailVerification(user, {
      url: "https://netflix-clone-iota-eight-99.vercel.app/auth-action",
      handleCodeInApp: true,
    });
    console.log("Verification email sent");
  } catch (error) {
    console.error("Failed to send verification email:", error.message);
  }

  return userCredential; // or userCredential, depending on your use-case
}

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function checkIfEmailExists(email) {
  return fetchSignInMethodsForEmail(auth, email);
}
