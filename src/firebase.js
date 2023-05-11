// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVzJ5trFWr06I0p0soUJENJ1EsDGnL6No",
  authDomain: "portfolio-email-4a532.firebaseapp.com",
  projectId: "portfolio-email-4a532",
  storageBucket: "portfolio-email-4a532.appspot.com",
  messagingSenderId: "850337023744",
  appId: "1:850337023744:web:f6c838564293ee30eed5e5",
  measurementId: "G-MC5V5DG7V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export  {
    collection, doc, setDoc, db
}