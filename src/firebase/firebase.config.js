
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;




// VITE_apiKey= AIzaSyBol9UOW9WZYIbUKi-Nr8dRXb3kETBnTms
// VITE_authDomain= cars-doctor-6c420.firebaseapp.com
// VITE_projectId= cars-doctor-6c420
// VITE_storageBucket= cars-doctor-6c420.appspot.com
// VITE_messagingSenderId= 191367262425
// VITE_appId= 1:191367262425:web:b4bdc2569524d63c2f8ec8