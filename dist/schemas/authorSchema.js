"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = exports.authorSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const personSchema_js_1 = require("./subDocuments/personSchema.js");
exports.authorSchema = new mongoose_2.Schema(Object.assign(Object.assign({}, personSchema_js_1.personSchema.obj), { books: [{ type: mongoose_1.default.Types.ObjectId, ref: 'Book' }], description: String }), {
    collection: 'authors',
    timestamps: true,
});
exports.Author = (0, mongoose_2.model)('Author', exports.authorSchema);
//# sourceMappingURL=authorSchema.js.map