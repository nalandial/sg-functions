import {Storage} from '@google-cloud/storage';

/**
 * Save an arbitrary blob (string or bytes) to the specified bucket
 * @param {string} bucketName - name of the bucket in which to save
 * @param {string} filePath - optional path to the file in the bucket
 * @param {string} fileName - name of the file in the bucket
 * @param {string} content - content to store as a string or array of bytes (ArrayBuffer)
 * @param {string} contentType - optional MIME type of the content, for example application/json
 */
// files outside of services should not directly import this file - this is meant to be a persistence layer only.
export const storeObject = async (bucketName: string, filePath: string, fileName: string, content: unknown, contentType = ''): Promise<void> => {
    if (typeof content !== 'string' && !ArrayBuffer.isView(content)) {
        throw new TypeError(`content must be a string or bytes (ArrayBuffer) but it was of type ${typeof content}`);
    }

    const bucketFile = new Storage()
        .bucket(bucketName)
        .file(`${filePath}/${fileName}`);

    return contentType ? bucketFile.save(content, {contentType}) : bucketFile.save(content);
};
