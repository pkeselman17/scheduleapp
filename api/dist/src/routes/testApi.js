"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get("/", (req, res, next) => {
    res.send("API WORKING!");
});
exports.default = router;
//# sourceMappingURL=testAPI.js.map