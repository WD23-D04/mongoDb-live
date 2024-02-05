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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bookRouter_js_1 = require("./routers/bookRouter.js");
const userRouter_js_1 = require("./routers/userRouter.js");
const authorRouter_js_1 = require("./routers/authorRouter.js");
const employeeRouter_js_1 = require("./routers/employeeRouter.js");
const app = (0, express_1.default)();
const port = 7575;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/books', bookRouter_js_1.booksRouter);
app.use('/users', userRouter_js_1.userRouter);
app.use('/authors', authorRouter_js_1.authorRouter);
app.use('/employees', employeeRouter_js_1.employeeRouter);
const dbUrl = process.env.DB_URL;
const connectToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(dbUrl || '');
    }
    catch (e) {
        throw new Error(e.message || 'Unknown error occurred');
    }
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectToDb();
        app.listen(port, () => console.log(`server is running on ${port}`));
    }
    catch (e) {
        throw new Error(e.message || 'Unknown error occurred');
    }
});
startServer();
//# sourceMappingURL=main.js.map