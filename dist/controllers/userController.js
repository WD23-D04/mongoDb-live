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
exports.deleteAllUsers = exports.deleteSingleUser = exports.updateSingleUser = exports.getAllUsers = exports.getSingleUser = exports.addSingleUser = void 0;
const userSchema_js_1 = require("../schemas/userSchema.js");
const handleError_js_1 = require("../utils/handleError.js");
// addSingleUser
const addSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userSchema_js_1.User.create(req.body);
        res.status(201).json(user);
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.addSingleUser = addSingleUser;
// getSingleUser
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userSchema_js_1.User.findById(req.params.id).populate('books');
        user
            ? res.status(200).json(user)
            : res.status(404).json({ msg: `${req.params.id} not found` });
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.getSingleUser = getSingleUser;
// getAllUsers
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userSchema_js_1.User.find();
        res.status(200).json(users);
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.getAllUsers = getAllUsers;
// udpateSingleUser
const updateSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userSchema_js_1.User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        user
            ? res.status(200).json(user)
            : res.status(404).json({ msg: `${req.params.id} not found` });
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.updateSingleUser = updateSingleUser;
// deleteSingleUser
const deleteSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userSchema_js_1.User.findByIdAndDelete(req.params.id);
        user
            ? res.status(200).json(user)
            : res.status(404).json({ msg: `${req.params.id} not found` });
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.deleteSingleUser = deleteSingleUser;
const deleteAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userSchema_js_1.User.deleteMany();
        res.status(200).json(users);
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.deleteAllUsers = deleteAllUsers;
//# sourceMappingURL=userController.js.map