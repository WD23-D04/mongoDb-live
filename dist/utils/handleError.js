"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (res, e) => {
    return res.status(500).json(e.message);
};
exports.handleError = handleError;
//# sourceMappingURL=handleError.js.map