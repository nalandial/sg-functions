import * as functions from 'firebase-functions';

/**
 * Throws an HttpsError if the argument is not present or if it is not an object.
 * @param {string} argumentName - name of the argument for error reporting purposes
 * @param {*} argument - the value to check
 */
export const verifyFunctionArgAsObject = (argumentName: string, argument: unknown) : void => {
    if (!argument) {
        throw new functions.https.HttpsError('invalid-argument', `Missing "${argumentName}"`);
    } else if ((typeof argument) !== 'object') {
        throw new functions.https.HttpsError('invalid-argument', `Expected "${argumentName}" to be an object`);
    }
}
