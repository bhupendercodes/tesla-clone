import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyADmNVmiase3zsqyIoIURMSkxOzb2idBYQ",
  authDomain: "tesla-clone-f6fd8.firebaseapp.com",
  projectId: "tesla-clone-f6fd8",
  storageBucket: "tesla-clone-f6fd8.appspot.com",
  messagingSenderId: "581775487687",
  appId: "1:581775487687:web:45522451b71242c99a44e2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
