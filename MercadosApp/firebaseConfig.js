// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9E4XayC5sGh-ixAbw0x5GXVEsl3Wl9N4",
  authDomain: "mercadosapp2-7c516.firebaseapp.com",
  projectId: "mercadosapp2-7c516",
  storageBucket: "mercadosapp2-7c516.appspot.com",
  messagingSenderId: "583330338623",
  appId: "1:583330338623:web:5a9c8573432fcd3547658a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
