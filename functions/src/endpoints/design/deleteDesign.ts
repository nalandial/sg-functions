import * as functions from 'firebase-functions';
import {removeDesign} from '../../services';
import {verifyFunctionArgAsString} from '../../utils/verifyFunctionArgAsString';

/**
 * Deletes a design with the given id only if the adminKey is valid
 * @param {{id:string,adminKey:string}} data - request body
 */
export const deleteDesign = functions.https.onCall(async (data, context) => {
  functions.logger.info(`Your user id is ${context.auth?.token.uid}`, {structuredData: true});

  const {id, adminKey} = data;

  verifyFunctionArgAsString('id', id);
  verifyFunctionArgAsString('adminKey', adminKey);

  await removeDesign(id, adminKey);
  return {};
});
