import * as functions from 'firebase-functions';
import {v4 as uuid} from 'uuid';
import {verifyFunctionArgAsObject} from '../../utils/verifyFunctionArgAsObject';
import {storeDesign} from '../../services/';

/**
 * Saves a new design for the currently logged in user.
 * @param {{design:Design}} data - request body
 */
export const createDesign = functions.https.onCall(async (data, context) => {
    //TODO: generating a UID here for testing purposes until we anonymously authenticate everyone
    const userId = context.auth?.token.uid || uuid();
    functions.logger.info(`Your user id is ${userId}`, {structuredData: true});

    const {design} = data;
    verifyFunctionArgAsObject('design', design);

    const {id, adminKey} = await storeDesign(userId, design, false);
    return {id, key: adminKey};
});
