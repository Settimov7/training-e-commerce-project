import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC2eXnCYvgI9s1VmCYPQh1NSMELQDzrlHI",
    authDomain: "training-e-commerce-db.firebaseapp.com",
    databaseURL: "https://training-e-commerce-db.firebaseio.com",
    projectId: "training-e-commerce-db",
    storageBucket: "training-e-commerce-db.appspot.com",
    messagingSenderId: "448755092171",
    appId: "1:448755092171:web:31f46111c411fa51daa94e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
