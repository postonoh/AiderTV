import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCeJP4PFpT9Ikw6EPrYD2DGb1l767U_BJg",
    authDomain: "aidertv.firebaseapp.com",
    databaseURL: "https://aidertv.firebaseio.com",
    projectId: "aidertv",
    storageBucket: "aidertv.appspot.com",
    messagingSenderId: "1074014514087",
    appId: "1:1074014514087:web:304e30b32a76b3313a2482",
    measurementId: "G-T2114W36PK"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;