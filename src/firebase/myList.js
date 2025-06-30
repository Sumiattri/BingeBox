import {
  doc,
  collection,
  setDoc,
  getDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firestoreUtils";

export const addToList = async (userId, profileId, movie) => {
  const movieRef = doc(
    db,
    "users",
    userId,
    "profiles",
    profileId,
    "myList",
    movie.id.toString()
  );
  await setDoc(movieRef, movie);
};

export const removeFromList = async (userId, profileId, movieId) => {
  const movieRef = doc(
    db,
    "users",
    userId,
    "profiles",
    profileId,
    "myList",
    movieId.toString()
  );
  await deleteDoc(movieRef);
};

export const IsInList = async (userId, profileId, movieId) => {
  const movieRef = doc(
    db,
    "users",
    userId,
    "profiles",
    profileId,
    "myList",
    movieId.toString()
  );
  const snapshot = await getDoc(movieRef);
  return snapshot.exists();
};

export const getMyList = async (userId, profileId) => {
  const listRef = collection(
    db,
    "users",
    userId,
    "profiles",
    profileId,
    "myList"
  );
  const snapshot = await getDocs(listRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
