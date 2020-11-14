"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAllDesignsForCurrentUser = void 0;
const functions = require("firebase-functions");
const mockDesign_1 = require("../utils/mockDesign");
exports.listAllDesignsForCurrentUser = functions.https.onCall((data, context) => {
    var _a;
    functions.logger.info(`Your user id is ${(_a = context.auth) === null || _a === void 0 ? void 0 : _a.token.uid}`, { structuredData: true });
    return [mockDesign_1.default];
});
//# sourceMappingURL=listAllDesignsForCurrentUser.js.map