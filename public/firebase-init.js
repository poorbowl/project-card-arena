// firebase-init.js

// PASTE YOUR ENTIRE, UNCHANGED firebaseConfig OBJECT HERE
const firebaseConfig = {
  apiKey: "AIzaSyB5qyJnS5l_89fOGSdolIHFBO-chpadSBw",
  authDomain: "project-card-arena.firebaseapp.com",
  databaseURL: "https://project-card-arena-default-rtdb.firebaseio.com/",
  projectId: "project-card-arena",
  storageBucket: "project-card-arena.appspot.com",
  messagingSenderId: "220631442929",
  appId: "1:220631442929:web:318271a2def224b7c91050",
  measurementId: "G-7E2KPYHBZ9"
};

// Initialize Firebase (do this just once)
const app = firebase.initializeApp(firebaseConfig);

// Get references to the services we'll use
const db = firebase.firestore();       // For storing card definitions
const storage = firebase.storage();    // For storing card images
const realdb = firebase.database();    // For real-time game state