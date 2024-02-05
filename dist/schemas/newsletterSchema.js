"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter = exports.newsletterSchema = void 0;
const mongoose_1 = require("mongoose");
exports.newsletterSchema = new mongoose_1.Schema({
    title: String,
    content: [String],
    sentDate: Date(),
    /* author: employee._id, */
});
exports.Newsletter = (0, mongoose_1.model)('Newsletter', exports.newsletterSchema);
//# sourceMappingURL=newsletterSchema.js.map