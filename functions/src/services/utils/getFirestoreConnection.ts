import * as admin from 'firebase-admin';

// TODO: not sure how i feel about this being a global variable vs. a singleton - singleton seems kinda weird for JS
let firestoreConnection : FirebaseFirestore.Firestore;

export const getFirestoreConnection = () : FirebaseFirestore.Firestore => {
    if (!firestoreConnection) {
        admin.initializeApp();
        firestoreConnection = admin.firestore();
    }
    return firestoreConnection;
}
