import * as functions from "firebase-functions";
import verifyPresentAsString from "../utils/verifyPresentAsString";
import {v4 as uuid} from "uuid";


export const createDesign = functions.https.onCall((data, context) => {
  functions.logger.info(`Your user id is ${context.auth?.token.uid}`, {structuredData: true});

  const {design} = data;
  verifyPresentAsString('design', design);

  return {
    id: uuid(),
    key: uuid(),
  };
});
