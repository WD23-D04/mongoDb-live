"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.bookSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const personSchema_js_1 = require("./subDocuments/personSchema.js");
exports.bookSchema = new mongoose_1.default.Schema({
    title: String,
    authors: [{ type: mongoose_1.default.Types.ObjectId, ref: 'Author' }],
    pages: Number,
    available: Boolean,
    publishedDate: { type: Date, default: new Date() },
    publisher: String,
    contributors: [Object.assign(Object.assign({}, personSchema_js_1.personSchema.obj), { role: String })],
}, {
    timestamps: true,
});
exports.Book = mongoose_1.default.model('Book', exports.bookSchema);
//# sourceMappingURL=bookSchema.js.map