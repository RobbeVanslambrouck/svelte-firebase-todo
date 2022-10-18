import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_yuX_1A_pILSP2I6C-gsvESsaeIQ3y3g",
  authDomain: "todo-47c75.firebaseapp.com",
  projectId: "todo-47c75",
  storageBucket: "todo-47c75.appspot.com",
  messagingSenderId: "533230517402",
  appId: "1:533230517402:web:d679cf8cd975d3862f7323",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export function login(): void {
  signInWithPopup(auth, googleProvider);
}

export const db = getFirestore(app);
