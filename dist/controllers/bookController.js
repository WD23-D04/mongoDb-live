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
exports.deleteAllBooks = exports.deleteSingleBook = exports.updateSingleBook = exports.getAllBooks = exports.getSingleBook = exports.addSingleBook = void 0;
const bookSchema_js_1 = require("../schemas/bookSchema.js");
const handleError_js_1 = require("../utils/handleError.js");
const addSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield bookSchema_js_1.Book.create(req.body);
        res.status(201).json(book);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
exports.addSingleBook = addSingleBook;
const getSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /* const book = await Book.find({_id : ObjectId(req.params.id)}) */
        const book = yield bookSchema_js_1.Book.findById(req.params.id);
        book
            ? res.status(200).json(book)
            : res.status(404).json({ msg: `${req.params.id} not found` });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
exports.getSingleBook = getSingleBook;
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield bookSchema_js_1.Book.find();
        res.status(200).json(books);
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.getAllBooks = getAllBooks;
const updateSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield bookSchema_js_1.Book.findByIdAndUpdate(req.params.id, req.body);
        book
            ? res.status(200).json(book)
            : res.status(404).json({ msg: `${req.params.id} not found` });
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.updateSingleBook = updateSingleBook;
const deleteSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /* const book = await Book.deleteOne({_id : ObjectId(req.params.id)}); */
        const book = yield bookSchema_js_1.Book.findByIdAndDelete(req.params.id);
        book
            ? res.status(200).json(book)
            : res.status(404).json({ msg: `${req.params.id} not found` });
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.deleteSingleBook = deleteSingleBook;
const deleteAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield bookSchema_js_1.Book.deleteMany();
        res.status(200).json(books);
    }
    catch (e) {
        (0, handleError_js_1.handleError)(res, e);
    }
});
exports.deleteAllBooks = deleteAllBooks;
//# sourceMappingURL=bookController.js.map