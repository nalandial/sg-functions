import * as functions from 'firebase-functions';
import {verifyFunctionArgAsString} from '../../utils/verifyFunctionArgAsString';
import {verifyFunctionArgAsObject} from '../../utils/verifyFunctionArgAsObject';
import {modifyDesign} from '../../services';

/**
 * Updates the design with the given id if the key is a valid edit or admin key
 * @param {{id:string,key:string,design:Design}}
 */
export const updateDesign = functions.https.onCall(async (data, context) => {
  functions.logger.info(`Your user id is ${context.auth?.token.uid}`, {structuredData: true});

  const {id, design, key} = data;
  verifyFunctionArgAsString('id', id);
  verifyFunctionArgAsString('key', key);
  verifyFunctionArgAsObject('design', design);

  await modifyDesign(id, design, key, false);
  return {};
});
