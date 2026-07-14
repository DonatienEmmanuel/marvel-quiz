import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
import * as firestore from 'firebase/firestore'
import { Component } from 'react';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAINE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
};

class Firebase extends Component {

    constructor() {
        super();
        // Initialisation de Firebase dans notre application
        this.app = initializeApp(config);
        // Implementation de l'API d'authentification
        this.auth = getAuth(this.app);
        // Implementation de l'API firestore
        this.firestore = firestore.getFirestore(this.app);
        
    }

    // Defifinition de differente fonctions d'authentification

    // l'inscription
    signupUser = (email, password) =>
    createUserWithEmailAndPassword(this.auth, email, password)

    // la connexion
    loginUser = (email, password) =>
    signInWithEmailAndPassword(this.auth, email, password)

    // la deconnexion
    signoutUser = () => 
        this.auth.signOut();

    // Reset password
    passwordReset = (email) =>
    sendPasswordResetEmail(this.auth, email)

    // Reference to a document
    user = uid => firestore.doc(this.firestore, `users/${uid}`)
    
}

export default Firebase;