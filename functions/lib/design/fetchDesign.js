"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDesign = void 0;
const functions = require("firebase-functions");
const verifyPresentAsString_1 = require("../utils/verifyPresentAsString");
const mockDesign_1 = require("../utils/mockDesign");
exports.fetchDesign = functions.https.onCall((data, context) => {
    var _a;
    functions.logger.info(`Your user id is ${(_a = context.auth) === null || _a === void 0 ? void 0 : _a.token.uid}`, { structuredData: true });
    const { id } = data;
    verifyPresentAsString_1.default('id', id);
    return mockDesign_1.default;
});
//# sourceMappingURL=fetchDesign.js.map