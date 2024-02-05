"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRouter = void 0;
const express_1 = __importDefault(require("express"));
const employeeController_js_1 = require("../controllers/employeeController.js");
exports.employeeRouter = express_1.default.Router();
exports.employeeRouter.route('/').post(employeeController_js_1.addOneEmployee).get(employeeController_js_1.findEmployees);
exports.employeeRouter
    .route('/:id')
    .get(employeeController_js_1.findOneEmployee)
    .patch(employeeController_js_1.updateEmployee)
    .delete(employeeController_js_1.deleteEmployee);
//# sourceMappingURL=employeeRouter.js.map