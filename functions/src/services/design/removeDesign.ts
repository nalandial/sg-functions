import * as r from 'teeny-request';
import {EXPIRATION_BUCKET_NAME, NON_EXPIRATION_BUCKET_NAME} from '../../config/storageBucketNames';
import {removeObject} from '../storage/removeObject';

/**
 * Deletes a design with a given id.
 * @param {string} id - the id for this design
 * @param {string} adminKey - the administrator key for this design
 */
// TODO: check adminKey in database to ensure a match before attempting to delete
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const removeDesign = async (id: string, adminKey: string): Promise<[r.Response<unknown>][]> => {
    // need to try to remove from both buckets in case of concurrency issues with subscription activity
    return Promise.all([
        removeObject(EXPIRATION_BUCKET_NAME, 'designs', `${id}.json`),
        removeObject(NON_EXPIRATION_BUCKET_NAME, 'designs', `${id}.json`)
    ]);
}
