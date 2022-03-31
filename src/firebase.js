// import * as firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDWRtt2l0f8YjgIEvpuhY7M8ENG2rNfctU",
  authDomain: "linkedin-clone-aa804.firebaseapp.com",
  projectId: "linkedin-clone-aa804",
  storageBucket: "linkedin-clone-aa804.appspot.com",
  messagingSenderId: "427197008398",
  appId: "1:427197008398:web:177411112be1d82fba8a5f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
