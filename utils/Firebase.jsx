// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmT72HN2e94nhiF_o5FNF-QjcQlpEu2k8",
  authDomain: "netflixgpt-4c1b6.firebaseapp.com",
  projectId: "netflixgpt-4c1b6",
  storageBucket: "netflixgpt-4c1b6.firebasestorage.app",
  messagingSenderId: "298268335758",
  appId: "1:298268335758:web:6ec1392619397259e9b3df",
  measurementId: "G-6KWEPZ72J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);