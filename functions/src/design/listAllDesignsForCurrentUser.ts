import * as functions from "firebase-functions";
import mockDesign from "../utils/mockDesign";

export const listAllDesignsForCurrentUser = functions.https.onCall((data, context) => {
    functions.logger.info(`Your user id is ${context.auth?.token.uid}`, {structuredData: true});

    return [mockDesign];
});
