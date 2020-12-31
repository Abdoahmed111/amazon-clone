import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3HdU9dOam63aYAoArqUZNiaivP3g85J8",
  authDomain: "like-clone.firebaseapp.com",
  projectId: "like-clone",
  storageBucket: "like-clone.appspot.com",
  messagingSenderId: "196901504106",
  appId: "1:196901504106:web:f13e2fa46a863b6fb47613",
};

// initialize the firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize the firebase database (firestore)
const db = firebaseApp.firestore();

// initialize the authentication
const auth = firebase.auth();

export { db, auth };
