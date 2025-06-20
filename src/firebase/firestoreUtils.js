// src/firebase/firestoreUtils.js
import { db, auth } from "./firebase";
import { doc, collection, addDoc, getDocs } from "firebase/firestore";

export const addProfileToFirestore = async (profileData) => {
  const user = auth.currentUser;

  if (!user) throw new Error("User not logged in");

  const profilesRef = collection(doc(db, "users", user.uid), "profiles");

  const docRef = await addDoc(profilesRef, profileData);
  return docRef.id; // Return profile ID for reference
};

export const getUserProfiles = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error("User not logged in");

  const profilesRef = collection(doc(db, "users", user.uid), "profiles");
  const snapshot = await getDocs(profilesRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
