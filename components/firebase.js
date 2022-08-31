// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM6ORowDWzgVIBJz3QaU0oMTZYfHsrj54",
  authDomain: "sugar-hub-a707e.firebaseapp.com",
  projectId: "sugar-hub-a707e",
  storageBucket: "sugar-hub-a707e.appspot.com",
  messagingSenderId: "1001920455424",
  appId: "1:1001920455424:web:e07b02faa027ad9bc449e5",
  measurementId: "G-2BG5N3MF6R",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

var db = app.firestore();

const auth = firebase.auth();

export { auth, db };

// database for glucose trend screen