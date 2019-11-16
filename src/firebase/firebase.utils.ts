import firebase, {User} from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

type DocumentReference = firebase.firestore.DocumentReference;

type AdditionalInfo = {
    [key: string]: any;
}

const config = {
    apiKey: "AIzaSyC2eXnCYvgI9s1VmCYPQh1NSMELQDzrlHI",
    authDomain: "training-e-commerce-db.firebaseapp.com",
    databaseURL: "https://training-e-commerce-db.firebaseio.com",
    projectId: "training-e-commerce-db",
    storageBucket: "training-e-commerce-db.appspot.com",
    messagingSenderId: "448755092171",
    appId: "1:448755092171:web:31f46111c411fa51daa94e"
};

export const createUserProfileDocument = async (userAuth: User | null, additionalInfo?: AdditionalInfo): Promise<DocumentReference | undefined> => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            })
        } catch (error) {
            console.error('Creating user error', error.message)
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
