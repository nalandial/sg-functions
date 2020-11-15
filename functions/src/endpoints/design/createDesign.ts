import * as functions from 'firebase-functions';
import {v4 as uuid} from 'uuid';
import {verifyFunctionArgAsObject} from '../../utils/verifyFunctionArgAsObject';
import {generateKey} from '../../utils/generateKey';
import {storeOrUpdateDesign} from '../../services/';
import newDesignKey from "../../utils/newDesignKey";

/**
 * Saves a new design for the currently logged in user.
 * @param {{design:Design}} data - request body
 */
export const createDesign = functions.https.onCall(async (data, context) => {
    functions.logger.info(`Your user id is ${context.auth?.token.uid}`, {structuredData: true});

    const {design} = data;
    verifyFunctionArgAsObject('design', design);

    const id = uuid();
    const adminKey = generateKey();

    await storeOrUpdateDesign(id, design, newDesignKey, false);
    return {id, key: adminKey};
});
