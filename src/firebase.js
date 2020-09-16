import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8sJ1DfThJxVtD6o-QLSzYRnEUpvX_Yck",
  authDomain: "fb-clone-ba14b.firebaseapp.com",
  databaseURL: "https://fb-clone-ba14b.firebaseio.com",
  projectId: "fb-clone-ba14b",
  storageBucket: "fb-clone-ba14b.appspot.com",
  messagingSenderId: "1009215869298",
  appId: "1:1009215869298:web:694cde1bd16dd26f3a8deb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default firestore;
