import { randomBytes } from 'crypto';

export const generateKey = () => {
    return randomBytes(20).toString('hex');
}
