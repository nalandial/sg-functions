import {EXPIRATION_BUCKET_NAME, NON_EXPIRATION_BUCKET_NAME} from '../../config/storageBucketNames';
import {getObject} from '../storage/getObject';

/**
 * Retrieves a design with a given id.
 * @param {string} id - the id for this design
 * @param {boolean} isPremiumUser - whether the user has a paid subscription. Defaults to false.
 */
export const getDesign = async (id: string, isPremiumUser = false): Promise<Design> => {
    const bucket = isPremiumUser ? NON_EXPIRATION_BUCKET_NAME : EXPIRATION_BUCKET_NAME;
    const objects = await getObject(bucket, 'designs', `${id}.json`,);
    return objects.length ? JSON.parse(objects[0].toString()) : null;
}
