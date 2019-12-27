import firebase from 'firebase';

export type DocumentReference = firebase.firestore.DocumentReference;
export type QuerySnapshot = firebase.firestore.QuerySnapshot;
export type AdditionalInfo = {
    [key: string]: any;
}
export type UserCredential = firebase.auth.UserCredential;
export type DocumentSnapshot = firebase.firestore.DocumentSnapshot;