import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB7AHM6AhUtazY0_nz4BJkYri9YXCFpehw",
  authDomain: "crwn-db-6051d.firebaseapp.com",
  databaseURL: "https://crwn-db-6051d.firebaseio.com",
  projectId: "crwn-db-6051d",
  storageBucket: "crwn-db-6051d.appspot.com",
  messagingSenderId: "946429866361",
  appId: "1:946429866361:web:c863f8dc82c3615006ffa8",
  measurementId: "G-X7Y69KJ8HT"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
