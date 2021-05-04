"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefilled = void 0;
exports.prefilled = Array.from({ length: 50 }).map(function (pass, ind) { return ({
    name: "" + ("passenger" + ind),
    location: expect.any(String),
}); });
