"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userController_js_1 = require("../controllers/userController.js");
exports.userRouter = express_1.default.Router();
exports.userRouter
    .route('/')
    .post(userController_js_1.addSingleUser)
    .get(userController_js_1.getAllUsers)
    .delete(userController_js_1.deleteAllUsers);
exports.userRouter
    .route('/:id')
    .get(userController_js_1.getSingleUser)
    .patch(userController_js_1.updateSingleUser)
    .delete(userController_js_1.deleteSingleUser);
//# sourceMappingURL=userRouter.js.map