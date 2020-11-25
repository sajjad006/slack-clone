import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATf6n3OEoUvHHHfhH9d3RTwCwvke9-y_E",
  authDomain: "slack-clone-cacb9.firebaseapp.com",
  databaseURL: "https://slack-clone-cacb9.firebaseio.com",
  projectId: "slack-clone-cacb9",
  storageBucket: "slack-clone-cacb9.appspot.com",
  messagingSenderId: "538923821514",
  appId: "1:538923821514:web:64502909ad4348e98ac733",
  measurementId: "G-Y47MQ632XN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider};
export default db;