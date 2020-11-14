import * as functions from "firebase-functions";
import verifyPresentAsString from "../utils/verifyPresentAsString";

export const deleteDesign = functions.https.onCall((data, context) => {
  functions.logger.info(`Your user id is ${context.auth?.token.uid}`, {structuredData: true});

  const {id,key} = data;
  verifyPresentAsString('id', id);
  verifyPresentAsString('key', key);

  return {};
});
