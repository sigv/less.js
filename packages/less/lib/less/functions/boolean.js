"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var anonymous_1 = __importDefault(require("../tree/anonymous"));
var keyword_1 = __importDefault(require("../tree/keyword"));
function boolean(condition) {
    return condition ? keyword_1.default.True : keyword_1.default.False;
}
function If(condition, trueValue, falseValue) {
    return condition ? trueValue
        : (falseValue || new anonymous_1.default);
}
exports.default = { boolean: boolean, 'if': If };
//# sourceMappingURL=boolean.js.map