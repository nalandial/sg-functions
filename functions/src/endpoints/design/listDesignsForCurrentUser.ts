import * as functions from 'firebase-functions';
import mockDesign from '../../utils/mockDesign';

/**
 * Retrieves all designs for the currently logged in user
 */
export const listDesignsForCurrentUser = functions.https.onCall((data, context) => {
    functions.logger.info(`Your user id is ${context.auth?.token.uid}`, {structuredData: true});

    return [mockDesign];
});
