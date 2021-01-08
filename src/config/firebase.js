import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiym4Oep4cMR_WRBWJ1jQJuhasZdAwimE",
  authDomain: "fieldfolio-clone.firebaseapp.com",
  databaseURL: "https://fieldfolio-clone-default-rtdb.firebaseio.com",
  projectId: "fieldfolio-clone",
  storageBucket: "fieldfolio-clone.appspot.com",
  messagingSenderId: "287170149985",
  appId: "1:287170149985:web:e23e36d660f4468068b420",
  measurementId: "G-M91F56ED54",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
