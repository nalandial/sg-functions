"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
/**
 * Throws an HttpsError if the argument is not present or if it is not a string.
 * @param {string} argumentName - name of the argument for error reporting purposes
 * @param {*} argument - the value to check
 */
exports.default = (argumentName, { argument }) => {
    if (!argument) {
        throw new functions.https.HttpsError('invalid-argument', `Missing "${argumentName}"`);
    }
    else if ((typeof argument) !== 'string') {
        throw new functions.https.HttpsError('invalid-argument', `Expected "${argumentName}" to be a string`);
    }
};
//# sourceMappingURL=verifyPresentAsString.js.map