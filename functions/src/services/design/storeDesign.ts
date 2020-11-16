import * as admin from 'firebase-admin';
import {storeObject} from '../storage/storeObject';
import {EXPIRATION_BUCKET_NAME, NON_EXPIRATION_BUCKET_NAME} from '../../config/storageBucketNames';
import {generateKey} from '../../utils/generateKey';
import {initFirebaseApp} from '../../utils/initFirebaseApp';

/**
 * Creates a new design belonging to the user.
 * @param {string} userId - current user's UID
 * @param {Design} design - design object
 * @param {boolean} isPremiumUser - whether current user has a paid subscription
 * @return new design id and generated admin key for the design
 */
export const storeDesign = async (userId: string, design: Design, isPremiumUser = false): Promise<{ id: string; adminKey: string }> => {
    const bucket = isPremiumUser ? NON_EXPIRATION_BUCKET_NAME : EXPIRATION_BUCKET_NAME;

    const adminKey = generateKey();
    const document = {adminKey: generateKey(), userId};

    initFirebaseApp();
    const docReference = admin.firestore().collection('designs').doc();
    await admin.firestore().runTransaction(async (transaction) => {
        // make sure if one of these things fails then we don't end up with orphaned data either in the db or storage
        await transaction.create(docReference, document); // will not actually commit until this function resolves
        // if this fails, addition of document will never be committed
        await storeObject(
            bucket,
            'designs',
            `${docReference.id}.json`,
            JSON.stringify(design),
            'application/json');
    });

    return {id: docReference.id, adminKey};
}