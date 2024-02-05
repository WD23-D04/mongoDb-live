"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorRouter = void 0;
const express_1 = __importDefault(require("express"));
const authorController_js_1 = require("../controllers/authorController.js");
exports.authorRouter = express_1.default.Router();
exports.authorRouter.route('/').get(authorController_js_1.getManyAuthors).post(authorController_js_1.addSingleAuthor);
exports.authorRouter
    .route('/:id')
    .get(authorController_js_1.getSingleAuthor)
    .patch(authorController_js_1.udpateSingleAuthor)
    .delete(authorController_js_1.deleteSingleAuthor);
//# sourceMappingURL=authorRouter.js.map