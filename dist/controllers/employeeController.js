"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.findEmployees = exports.findOneEmployee = exports.addOneEmployee = void 0;
const handleError_js_1 = require("../utils/handleError.js");
const employeeSchema_js_1 = require("../schemas/employeeSchema.js");
const addOneEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield employeeSchema_js_1.Employee.create(req.body);
        res.status(200).json(employee);
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.addOneEmployee = addOneEmployee;
const findOneEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield employeeSchema_js_1.Employee.findById(req.params.id).populate('books');
        employee
            ? res.status(201).json(employee)
            : res.status(404).json({ message: `Entry not found: ${req.params.id} ` });
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.findOneEmployee = findOneEmployee;
const findEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield employeeSchema_js_1.Employee.find();
        res.status(201).json(employee);
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.findEmployees = findEmployees;
const updateEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield employeeSchema_js_1.Employee.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        employee
            ? res.status(201).json(employee)
            : res
                .status(404)
                .json({ message: `Entry was not found: ${req.params.id} ` });
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.updateEmployee = updateEmployee;
const deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield employeeSchema_js_1.Employee.findByIdAndDelete(req.params.id);
        employee
            ? res.status(201).json(employee)
            : res
                .status(404)
                .json({ message: `Entry was not found: ${req.params.id} ` });
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.deleteEmployee = deleteEmployee;
//# sourceMappingURL=employeeController.js.map