// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBe9NPy9s7kPTlqybLptvuUkfvsgZuJTt0",
    authDomain: "fir-authentication-10771.firebaseapp.com",
    projectId: "fir-authentication-10771",
    storageBucket: "fir-authentication-10771.appspot.com",
    messagingSenderId: "486772209538",
    appId: "1:486772209538:web:c0a367670864002eb3c19b",
    measurementId: "G-BM093THVEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);
