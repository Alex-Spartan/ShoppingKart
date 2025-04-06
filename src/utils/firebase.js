import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.envVITE_.Firebase_API_KEY,
  authDomain: import.meta.env.VITE_Firebase_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_Firebase_PROJECTID,
  storageBucket: import.meta.env.VITE_Firebase_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_Firebase_MESSAGING_SENDERID,
  appId: import.meta.env.VITE_Firebase_APPID,
  measurementId: import.meta.env.VITE_Firebase_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();