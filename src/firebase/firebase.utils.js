import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBhaCKlX3esZjlEuvy5JgFJPpUTerbxAfk",
  authDomain: "apex-db-d28d7.firebaseapp.com",
  databaseURL: "https://apex-db-d28d7.firebaseio.com",
  projectId: "apex-db-d28d7",
  storageBucket: "apex-db-d28d7.appspot.com",
  messagingSenderId: "899137792238",
  appId: "1:899137792238:web:d6d99c3c571f14f8ea2bff",
  measurementId: "G-C3YXR4T9J4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
