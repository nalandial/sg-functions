import * as admin from 'firebase-admin';

let hasInitializedApp = false;

export const initFirebaseApp = () : void => {
    if (!hasInitializedApp) {
        hasInitializedApp = true;
        admin.initializeApp();
    }
}
