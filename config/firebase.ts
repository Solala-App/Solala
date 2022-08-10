// Import the functions you need from the SDKs you need
import Constants from "expo-constants";
import { initializeApp } from "firebase/app";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Constants.manifest?.firebase?.firebaseApiKey,
  authDomain: Constants.manifest?.firebase?.firebaseAuthDomain,
  projectId: Constants.manifest?.firebase?.firebaseProjectId,
  storageBucket: Constants.manifest?.firebase?.firebaseStorageBucket,
  messagingSenderId: Constants.manifest?.firebase?.firebaseMessagingSenderId,
  appId: Constants.manifest?.firebase?.firebaseAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
