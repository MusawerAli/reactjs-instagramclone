import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD1gGIBY7GhcIdGcd51Dbm4yMGiCJhW8AA",
    authDomain: "react-netflix-68010.firebaseapp.com",
    projectId: "react-netflix-68010",
    storageBucket: "react-netflix-68010.appspot.com",
    messagingSenderId: "198963016011",
    appId: "1:198963016011:web:3272686b5e54b7bb7bf8ce"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;
