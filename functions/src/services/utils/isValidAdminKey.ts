import * as admin from 'firebase-admin';
import {initFirebaseApp} from '../../utils/initFirebaseApp';

/**
 * Determines whether a given key matches the admin key for the specified design
 * @param {string} designId - id of the design
 * @param {string} key - value to check
 */
export const isValidAdminKey = async (designId: string, key: string) : Promise<boolean> => {
    if (!key) {
        return false;
    }

    initFirebaseApp();
    const docReference = admin.firestore().collection('designs').doc(designId);
    const storedAdminKey = (await docReference.get()).get('adminKey');
    return storedAdminKey.toLowerCase() === key.toLowerCase();
};
