"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSingleRequest = void 0;
const handleSingleRequest = (req, res, object) => {
    return object
        ? res.status(200).json(object)
        : res.status(404).json({ msg: `${req.params.id} not found` });
};
exports.handleSingleRequest = handleSingleRequest;
//# sourceMappingURL=handleSingleRequest.js.map