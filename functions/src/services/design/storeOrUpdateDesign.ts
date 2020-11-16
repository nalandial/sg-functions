import {EXPIRATION_BUCKET_NAME, NON_EXPIRATION_BUCKET_NAME} from '../../config/storageBucketNames';
import {storeObject} from '../storage/storeObject';
import newDesignKey from "../../utils/newDesignKey";
import {testObjectExists} from "../storage/testsObjectExists";

/**
 * Saves or updates a design with a given id.
 * @param {string} id - the id for this design
 * @param {object} design - design data as an object
 * @param {string} key - edit/admin key if updating, or utils/newDesignKey.ts if creating new (done to avoid security bugs)
 * @param {boolean} isPremiumUser - whether the user has a paid subscription. Defaults to false.
 */
export const storeOrUpdateDesign = async (id: string, design: Design, key: string, isPremiumUser = false): Promise<void> => {
    const bucket = isPremiumUser ? NON_EXPIRATION_BUCKET_NAME : EXPIRATION_BUCKET_NAME;

    if (!key) {
        throw new Error('key is required');
    } else if (key === newDesignKey) {
        // double check to see if this already exists so we don't try to overwrite a design without being given a valid key
        const doesExist = await testObjectExists(bucket, 'designs', `${id}.json`);
        if (doesExist) {
            throw new Error(`Tried to create new design with id ${id} but it already exists`);
        }
    } else {
        // TODO: check to see if key is a valid edit/admin key for this design
    }


    return storeObject(bucket, 'designs', `${id}.json`, JSON.stringify(design), 'application/json');
}
