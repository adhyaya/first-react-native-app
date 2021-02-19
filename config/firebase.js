import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmxtBCnKQjshQma4KqQTRBfBq4BVExfc0",
  authDomain: "firstreactnativeapp-46a2f.firebaseapp.com",
  projectId: "firstreactnativeapp-46a2f",
  storageBucket: "firstreactnativeapp-46a2f.appspot.com",
  messagingSenderId: "499682511711",
  appId: "1:499682511711:web:3475136a5cf51f18f584ea",
  measurementId: "G-8N3520BPKE"
};


firebase.initializeApp(firebaseConfig);

export default firebase;