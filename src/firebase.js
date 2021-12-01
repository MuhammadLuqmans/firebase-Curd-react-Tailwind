import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw7jTEQZTUBd5uxqRM6PazqFqZZhiQvBQ",
  authDomain: "firechat-7f34f.firebaseapp.com",
  projectId: "firechat-7f34f",
  storageBucket: "firechat-7f34f.appspot.com",
  messagingSenderId: "566617098812",
  appId: "1:566617098812:web:cb0d23fc1d8b8de66bd139",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();
