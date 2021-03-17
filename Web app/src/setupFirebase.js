import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

// create a web app in fireabse 
// then get your app config object from firebase console -> settings
const firebaseConfig = {
  apiKey: "AIzaSyBRjPot6h-qcu0lHAUBRRfuctp8Nnz4TWA",
  authDomain: "air-recog.firebaseapp.com",
  projectId: "air-recog",
  storageBucket: "air-recog.appspot.com",
  messagingSenderId: "315266281011",
  appId: "1:315266281011:web:3621f5dc352ce88aa3fd46",
  measurementId: "G-PX87CFN3SK"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;