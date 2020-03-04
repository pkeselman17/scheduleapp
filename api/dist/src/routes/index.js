"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const Users_1 = tslib_1.__importDefault(require("./Users"));
const testAPI_1 = tslib_1.__importDefault(require("./testAPI"));
const router = express_1.Router();
router.use('/users', Users_1.default);
router.use('/testApi', testAPI_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map