// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi5KDy7NAJ8SEo5N6Yur3ZH7vgVnMGUIY",
  authDomain: "ecommerceapp-17669.firebaseapp.com",
  projectId: "ecommerceapp-17669",
  storageBucket: "ecommerceapp-17669.appspot.com",
  messagingSenderId: "701367912371",
  appId: "1:701367912371:web:aaf20f57e9a17f57b0edc6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}