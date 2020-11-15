import * as functions from "firebase-functions";
import {getDesign} from "../../services";
import {verifyFunctionArgAsString} from "../../utils/verifyFunctionArgAsString";

/**
 * Gets the design with the given id
 * @param {{id:string}} data - request body
 */
export const fetchDesign = functions.https.onCall(async (data, context) => {
  functions.logger.info(`Your user id is ${context.auth?.token.uid}`, {structuredData: true});

  const {id} = data;
  verifyFunctionArgAsString('id', id);

  const design = await getDesign(id, false);
  return { design };
});
