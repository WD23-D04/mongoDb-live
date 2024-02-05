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
exports.deleteSingleAuthor = exports.udpateSingleAuthor = exports.getManyAuthors = exports.getSingleAuthor = exports.addSingleAuthor = void 0;
const authorSchema_js_1 = require("../schemas/authorSchema.js");
const handleError_js_1 = require("../utils/handleError.js");
const addSingleAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield authorSchema_js_1.Author.create(req.body);
        res.status(201).json(author);
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.addSingleAuthor = addSingleAuthor;
const getSingleAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield authorSchema_js_1.Author.findById(req.params.id).populate('books');
        author
            ? res.status(200).json(author)
            : res.status(404).json({ msg: `${req.params.id} not found` });
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.getSingleAuthor = getSingleAuthor;
const getManyAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield authorSchema_js_1.Author.find();
        res.status(200).json(authors);
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.getManyAuthors = getManyAuthors;
const udpateSingleAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield authorSchema_js_1.Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        author
            ? res.status(200).json(author)
            : res.status(404).json({ msg: `${req.params.id} not found` });
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.udpateSingleAuthor = udpateSingleAuthor;
const deleteSingleAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield authorSchema_js_1.Author.findByIdAndDelete(req.params.id);
        author
            ? res.status(200).json(author)
            : res.status(404).json({ msg: `${req.params.id} not found` });
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.deleteSingleAuthor = deleteSingleAuthor;
//# sourceMappingURL=authorController.js.map