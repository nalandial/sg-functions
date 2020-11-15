import * as r from 'teeny-request';
import {Storage} from '@google-cloud/storage';

/**
 * Remove a blob from the specified bucket
 * @param {string} bucketName - name of the bucket in which to save
 * @param {string} filePath - optional path to the file in the bucket
 * @param {string} fileName - name of the file in the bucket
 */
// files outside of services should not directly import this file - this is meant to be a persistence layer only.
export const removeObject = async (bucketName: string, filePath: string, fileName: string): Promise<[r.Response<unknown>]> => {
    return new Storage()
        .bucket(bucketName)
        .file(`${filePath}/${fileName}`)
        .delete({ignoreNotFound: true});
};
