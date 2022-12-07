import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBXmCl34LVpTv4aysdMVZ946TgUn7rz-9E",
  authDomain: "utacourseavailability-50a5d.firebaseapp.com",
  projectId: "utacourseavailability-50a5d",
  storageBucket: "utacourseavailability-50a5d.appspot.com",
  messagingSenderId: "1025565773812",
  appId: "1:1025565773812:web:c4aed577953e6ad20a73a1",
  measurementId: "G-BJDJ7F6JKQ"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
// Initialize Analytics and get a reference to the service
const analytics = getAnalytics(app);

export {auth,analytics}
