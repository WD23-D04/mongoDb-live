"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksRouter = void 0;
const express_1 = __importDefault(require("express"));
const bookController_js_1 = require("../controllers/bookController.js");
exports.booksRouter = express_1.default.Router();
exports.booksRouter
    .route('/')
    .post(bookController_js_1.addSingleBook)
    .get(bookController_js_1.getAllBooks)
    .delete(bookController_js_1.deleteAllBooks);
exports.booksRouter
    .route('/:id')
    .get(bookController_js_1.getSingleBook)
    .delete(bookController_js_1.deleteSingleBook)
    .patch(bookController_js_1.updateSingleBook);
//# sourceMappingURL=bookRouter.js.map