// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG-Kf5FP-_c2CjlpQ9KssatM3-X6E4E2U",
  authDomain: "auth-project-uz.firebaseapp.com",
  databaseURL: "https://auth-project-uz-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "auth-project-uz",
  storageBucket: "auth-project-uz.appspot.com",
  messagingSenderId: "932520842796",
  appId: "1:932520842796:web:c76f4d5b82b6fdbf26a389",
  measurementId: "G-WELVM5E8XQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
