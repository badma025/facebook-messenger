
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnQICRdl61I5G02_d725DCDTR9ei-Vs4U",
  authDomain: "facebook-messenger-acb99.firebaseapp.com",
  projectId: "facebook-messenger-acb99",
  storageBucket: "facebook-messenger-acb99.appspot.com",
  messagingSenderId: "846684862828",
  appId: "1:846684862828:web:89b647f18f7ec840df5b49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db