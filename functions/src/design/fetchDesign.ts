import * as functions from "firebase-functions";
import verifyPresentAsString from "../utils/verifyPresentAsString";
import mockDesign from "../utils/mockDesign";

export const fetchDesign = functions.https.onCall((data, context) => {
  functions.logger.info(`Your user id is ${context.auth?.token.uid}`, {structuredData: true});

  const {id} = data;
  verifyPresentAsString('id', id);

  return mockDesign;
});
