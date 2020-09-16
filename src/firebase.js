import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHUnkKXB5E-d4tUthc5SnOc9tD1X9L_nY",
  authDomain: "barker-e6fca.firebaseapp.com",
  databaseURL: "https://barker-e6fca.firebaseio.com",
  projectId: "barker-e6fca",
  storageBucket: "barker-e6fca.appspot.com",
  messagingSenderId: "330785345473",
  appId: "1:330785345473:web:7d5a301e7c720bc9c92940",
  measurementId: "G-GLH87ZJWR5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
