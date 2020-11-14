"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDesign = void 0;
const functions = require("firebase-functions");
const verifyPresentAsString_1 = require("../utils/verifyPresentAsString");
exports.updateDesign = functions.https.onCall((data, context) => {
    var _a;
    functions.logger.info(`Your user id is ${(_a = context.auth) === null || _a === void 0 ? void 0 : _a.token.uid}`, { structuredData: true });
    const { design, id, key } = data;
    verifyPresentAsString_1.default('design', design);
    verifyPresentAsString_1.default('id', id);
    verifyPresentAsString_1.default('key', key);
    return {};
});
//# sourceMappingURL=updateDesign.js.map