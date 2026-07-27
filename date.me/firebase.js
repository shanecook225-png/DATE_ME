// Firebase App
import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firebase Firestore
import { 
getFirestore,
collection,
addDoc
} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Configuration Firebase

const firebaseConfig = {

  apiKey: "AIzaSyB0MEW5pL7RWx7ywy2t2XPozLc2oGD3IQ8",

  authDomain: "date-me-5d9b4.firebaseapp.com",

  projectId: "date-me-5d9b4",

  storageBucket: "date-me-5d9b4.firebasestorage.app",

  messagingSenderId: "47677653356",

  appId: "1:47677653356:web:24aa6a3c303d76757cb349",

  measurementId: "G-7D4KS7P451"

};


// Initialisation

const app = initializeApp(firebaseConfig);


// Connexion Firestore

const db = getFirestore(app);


// Export pour utiliser dans script.js

export { db, collection, addDoc };