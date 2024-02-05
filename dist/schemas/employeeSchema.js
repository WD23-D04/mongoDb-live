"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.employeeSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const personSchema_js_1 = require("./subDocuments/personSchema.js");
const contactInformationSchema_js_1 = require("./subDocuments/contactInformationSchema.js");
const addressSchema_js_1 = require("./subDocuments/addressSchema.js");
exports.employeeSchema = new mongoose_1.default.Schema(Object.assign(Object.assign(Object.assign({}, personSchema_js_1.personSchema.obj), contactInformationSchema_js_1.contactInformationSchema.obj), { address: addressSchema_js_1.addressSchema, vacationDays: Number, vacationTaken: [{ from: Date, to: Date }], leaveDays: [{ from: Date, to: Date }], workHours: Number, books: [
        {
            _id: { type: mongoose_1.default.Types.ObjectId, ref: 'Book' },
            borrowedDate: Date,
        },
    ] }), {
    collection: 'employees',
    timestamps: true,
    versionKey: false,
});
exports.Employee = mongoose_1.default.model('Employee', exports.employeeSchema);
//# sourceMappingURL=employeeSchema.js.map