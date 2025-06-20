// src/firebase/firestoreUtils.js
import { db, auth } from "./firebase";
import { doc, collection, addDoc } from "firebase/firestore";

export const addProfileToFirestore = async (profileData) => {
  const user = auth.currentUser;

  if (!user) throw new Error("User not logged in");

  const profilesRef = collection(doc(db, "users", user.uid), "profiles");

  const docRef = await addDoc(profilesRef, profileData);
  return docRef.id; // Return profile ID for reference
};
