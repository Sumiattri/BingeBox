// src/firebase/firestoreUtils.js
import app, { auth } from "./firebase";
import { getFirestore } from "firebase/firestore"; // 👈 Add this
export const db = getFirestore(app);
import {
  doc,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

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

export const deleteUserProfile = async (profileId) => {
  const user = auth.currentUser;
  // if (!userId) throw new Error("User ID is required to delete profile");

  const profileRef = doc(db, "users", user.uid, "profiles", profileId);
  await deleteDoc(profileRef);
};
export const updateProfileInFirestore = async (profileId, updatedData) => {
  const user = auth.currentUser;

  if (!user) throw new Error("User not authenticated");

  const profileDocRef = doc(db, "users", user.uid, "profiles", profileId);
  await updateDoc(profileDocRef, updatedData);
};
