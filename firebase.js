import {initializeApp} from 'firebase/app'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDSNb0ah0bouB8vFQ79w0NhCILUKnpop70",
    authDomain: "billylottory.firebaseapp.com",
    projectId: "billylottory",
    storageBucket: "billylottory.appspot.com",
    messagingSenderId: "269518540980",
    appId: "1:269518540980:web:a8a8765a3c776d394207e1"
  };


  const app = initializeApp(firebaseConfig)
  export const authentication = getAuth(app)