"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressSchema = void 0;
const mongoose_1 = require("mongoose");
exports.addressSchema = new mongoose_1.Schema({
    street: String,
    number: String,
    zipCode: String,
    state: String,
});
//# sourceMappingURL=addressSchema.js.map