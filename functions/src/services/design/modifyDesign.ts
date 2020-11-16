import {EXPIRATION_BUCKET_NAME, NON_EXPIRATION_BUCKET_NAME} from '../../config/storageBucketNames';
import {storeObject} from '../storage/storeObject';
import {isValidAdminKey} from "../utils/isValidAdminKey";

/**
 * Updates a design with a given id.
 * @param {string} id - the id for this design
 * @param {object} design - design data as an object
 * @param {string} key - a valid edit/admin key for this design
 * @param {boolean} isPremiumUser - whether the user has a paid subscription. Defaults to false.
 */
export const modifyDesign = async (id: string, design: Design, key: string, isPremiumUser = false): Promise<void> => {
    const bucket = isPremiumUser ? NON_EXPIRATION_BUCKET_NAME : EXPIRATION_BUCKET_NAME;

    // TODO: also check to see if this is a valid edit key once those are set up
    const isKeyValid = await isValidAdminKey(id, key);
    if (!isKeyValid) {
        throw new Error(`key is not valid for updating`);
    }

    return storeObject(bucket, 'designs', `${id}.json`, JSON.stringify(design), 'application/json');
}
