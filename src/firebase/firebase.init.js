// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCUAs-7BPCLn1382CUIe8mbiCM1yR4keI",
  authDomain: "spa-emajohn-react.firebaseapp.com",
  projectId: "spa-emajohn-react",
  storageBucket: "spa-emajohn-react.appspot.com",
  messagingSenderId: "997003246324",
  appId: "1:997003246324:web:4c045c747e6a563a70bca1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;