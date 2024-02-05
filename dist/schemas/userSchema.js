"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.userSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const personSchema_js_1 = require("./subDocuments/personSchema.js");
const contactInformationSchema_js_1 = require("./subDocuments/contactInformationSchema.js");
const addressSchema_js_1 = require("./subDocuments/addressSchema.js");
exports.userSchema = new mongoose_1.default.Schema(Object.assign(Object.assign(Object.assign({}, personSchema_js_1.personSchema.obj), contactInformationSchema_js_1.contactInformationSchema.obj), { address: addressSchema_js_1.addressSchema, subscribedFrom: { type: Date, default: new Date() }, books: [
        {
            _id: { type: mongoose_1.default.Types.ObjectId, ref: 'Book' },
            borrowedDate: Date,
        },
    ] }), {
    collection: 'users',
    timestamps: true,
    versionKey: false,
});
exports.User = mongoose_1.default.model('User', exports.userSchema);
//# sourceMappingURL=userSchema.js.map