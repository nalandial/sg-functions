"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDesign = void 0;
const functions = require("firebase-functions");
const verifyPresentAsString_1 = require("../utils/verifyPresentAsString");
const uuid_1 = require("uuid");
exports.createDesign = functions.https.onCall((data, context) => {
    var _a;
    functions.logger.info(`Your user id is ${(_a = context.auth) === null || _a === void 0 ? void 0 : _a.token.uid}`, { structuredData: true });
    const { design } = data;
    verifyPresentAsString_1.default('design', design);
    return {
        id: uuid_1.v4(),
        key: uuid_1.v4(),
    };
});
//# sourceMappingURL=createDesign.js.map