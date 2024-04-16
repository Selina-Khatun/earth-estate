// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvynNvPH6MukY-Ji7GW4v0fTZzrr59sOM",
  authDomain: "earth-estate.firebaseapp.com",
  projectId: "earth-estate",
  storageBucket: "earth-estate.appspot.com",
  messagingSenderId: "875171893419",
  appId: "1:875171893419:web:e36e2cedeaa481f21467ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;