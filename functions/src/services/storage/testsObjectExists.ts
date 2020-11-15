import {Storage} from '@google-cloud/storage';

/**
 * Tests whether the given file exists
 * @param {string} bucketName - name of the bucket in which to save
 * @param {string} filePath - optional path to the file in the bucket
 * @param {string} fileName - name of the file in the bucket
 */
// files outside of services should not directly import this file - this is meant to be a persistence layer only.
export const testObjectExists = async (bucketName: string, filePath: string, fileName: string): Promise<boolean> => {
    return await new Storage()
        .bucket(bucketName)
        .file(`${filePath}/${fileName}`)
        .exists()
        .then((results) => results.every(r => r));
};
