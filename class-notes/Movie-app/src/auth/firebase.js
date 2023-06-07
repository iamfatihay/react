import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDc1vL8xsSyesCmAs7GJihoMlkEWUtwyBA",
    authDomain: "movie-app-9c6b3.firebaseapp.com",
    projectId: "movie-app-9c6b3",
    storageBucket: "movie-app-9c6b3.appspot.com",
    messagingSenderId: "110832041696",
    appId: "1:110832041696:web:8126fc8b6c3f78ce799a85",
    measurementId: "G-QM8VB9WJ9R"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);