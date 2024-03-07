// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-qHIs1CZ6vnuZD8P4JM9MUKCzsl--n4Q",
    authDomain: "journal-app-6bfd6.firebaseapp.com",
    projectId: "journal-app-6bfd6",
    storageBucket: "journal-app-6bfd6.appspot.com",
    messagingSenderId: "262300626386",
    appId: "1:262300626386:web:f420a535dfdc3c3e4f6c0b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
//funcionalidades  de auth
export const FirebaseAuth = getAuth( FirebaseApp );
//base de datos
export const FirebaseDB = getFirestore( FirebaseApp );