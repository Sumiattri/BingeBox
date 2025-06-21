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

  // Optional: set display name if you want
  await updateProfile(user, { displayName: user.email });
  console.log(user);

  // Create user doc in Firestore
  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    createdAt: serverTimestamp(),
  });
  await sendEmailVerification(user);

  return userCredential; // or userCredential, depending on your use-case
}

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function checkIfEmailExists(email) {
  return fetchSignInMethodsForEmail(auth, email);
}
