import * as functions from "firebase-functions";
import verifyPresentAsString from "../utils/verifyPresentAsString";

export const updateDesign = functions.https.onCall((data, context) => {
  functions.logger.info(`Your user id is ${context.auth?.token.uid}`, {structuredData: true});

  const {design,id,key} = data;
  verifyPresentAsString('design', design);
  verifyPresentAsString('id', id);
  verifyPresentAsString('key', key);

  return {};
});
