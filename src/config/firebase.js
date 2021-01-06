import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7cPrll-M-nb-d8daDNLpdmLa-CQcOzWA",
  authDomain: "react-role-based-auth.firebaseapp.com",
  databaseURL: "https://react-role-based-auth-default-rtdb.firebaseio.com",
  projectId: "react-role-based-auth",
  storageBucket: "react-role-based-auth.appspot.com",
  messagingSenderId: "113955525842",
  appId: "1:113955525842:web:9d92d44e2310365cf6490b",
  measurementId: "G-5RS4X5NRBX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
