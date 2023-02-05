import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGrFLZe9zmLUR1w_Ir9lgKZ62rzprlHiM",
  authDomain: "multi-product-bab68.firebaseapp.com",
  projectId: "multi-product-bab68",
  storageBucket: "multi-product-bab68.appspot.com",
  messagingSenderId: "932343609016",
  appId: "1:932343609016:web:988b971d92fece7977e64d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
//const storageRef = firebase.storage().ref();
// if (firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
export { firebase };
export { auth, storage, db };
