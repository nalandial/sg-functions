import {EXPIRATION_BUCKET_NAME, NON_EXPIRATION_BUCKET_NAME} from '../../config/storageBucketNames';
import {removeObject} from '../storage/removeObject';
import {isValidAdminKey} from '../utils/isValidAdminKey';
import {getFirestoreConnection} from "../../utils/getFirestoreConnection";

/**
 * Deletes a design with a given id.
 * @param {string} id - the id for this design
 * @param {string} adminKey - the administrator key for this design
 */
export const removeDesign = async (id: string, adminKey: string): Promise<void> => {
    const isKeyValid = await isValidAdminKey(id, adminKey);
    if (!isKeyValid) {
        throw new Error(`key is not valid for deletion`);
    }

    const firestore = getFirestoreConnection();
    await Promise.all([
        // need to try to remove from both buckets in case of concurrency issues with subscription activity
        removeObject(EXPIRATION_BUCKET_NAME, 'designs', `${id}.json`),
        removeObject(NON_EXPIRATION_BUCKET_NAME, 'designs', `${id}.json`),
        firestore.collection('designs').doc(id).delete(),
    ]);
}
