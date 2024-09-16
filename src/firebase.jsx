// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1SLkD0YH0Lyuiz-943rtPxJMA-koSxLM",
  authDomain: "login-auth-8dd91.firebaseapp.com",
  projectId: "login-auth-8dd91",
  storageBucket: "login-auth-8dd91.appspot.com",
  messagingSenderId: "29927172445",
  appId: "1:29927172445:web:17f00450614b136ada20b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {auth}