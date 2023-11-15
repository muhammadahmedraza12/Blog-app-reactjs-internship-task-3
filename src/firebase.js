import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyLBwT_T738ZxmrGGfMGUqjQKF3JDHYc8",
  authDomain: "react-blog-app-13a84.firebaseapp.com",
  projectId: "react-blog-app-13a84",
  storageBucket: "react-blog-app-13a84.appspot.com",
  messagingSenderId: "1078824049800",
  appId: "1:1078824049800:web:5a74519fc9a176c214933d",
  measurementId: "G-662WCGDV3P"
  // firebase
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
