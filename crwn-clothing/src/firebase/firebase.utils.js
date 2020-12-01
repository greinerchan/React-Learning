import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyC6QRznQGN0F1mrJrTipbIdqcHVDO_5ph4",
    authDomain: "crwn-db-e3f37.firebaseapp.com",
    databaseURL: "https://crwn-db-e3f37.firebaseio.com",
    projectId: "crwn-db-e3f37",
    storageBucket: "crwn-db-e3f37.appspot.com",
    messagingSenderId: "746388958989",
    appId: "1:746388958989:web:1d4778486b840cd2384a44",
    measurementId: "G-ZSZQVMW79C"
}; 

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;