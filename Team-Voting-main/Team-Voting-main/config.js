import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB40AvTx_Un2Sredb1qZ-MeU10Ec24U2gQ",
    authDomain: "elibrary-1321a.firebaseapp.com",
    databaseURL: "https://elibrary-1321a-default-rtdb.firebaseio.com",
    projectId: "elibrary-1321a",
    storageBucket: "elibrary-1321a.appspot.com",
    messagingSenderId: "463400765572",
    appId: "1:463400765572:web:36f9e322bf9d3e2d41dad1"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();