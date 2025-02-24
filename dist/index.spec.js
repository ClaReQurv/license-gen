"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
describe("license-gen", () => {
    describe("with default pairs", () => {
        it("should generate a unique license key of 32 characters", () => {
            const resultA = (0, _1.default)(32);
            expect(resultA).toMatch(/^([A-Z0-9]{4}-){7}[A-Z0-9]{4}$/);
            const resultB = (0, _1.default)(32);
            expect(resultA).toMatch(/^([A-Z0-9]{4}-){7}[A-Z0-9]{4}$/);
            expect(resultA).not.toEqual(resultB);
        });
        it("should not generate a unique license key as given length is 0", () => {
            const result = (0, _1.default)(0);
            expect(result).toEqual("");
        });
        it("should not generate a unique license key as given length is -1", () => {
            const result = (0, _1.default)(-1);
            expect(result).toEqual("");
        });
    });
    describe("with bespoke pairs", () => {
        it("should generate a unique license key of 10 characters", () => {
            const resultA = (0, _1.default)(10, 5);
            expect(resultA).toMatch(/^([A-Z0-9]{5}-)[A-Z0-9]{5}$/);
            const resultB = (0, _1.default)(10, 5);
            expect(resultB).toMatch(/^([A-Z0-9]{5}-)[A-Z0-9]{5}$/);
            expect(resultA).not.toEqual(resultB);
        });
        it("should generate a unique license key of 10 characters each separated individually", () => {
            const resultA = (0, _1.default)(10, 1);
            expect(resultA).toMatch(/^([A-Z0-9]-){9}[A-Z0-9]$/);
            const resultB = (0, _1.default)(10, 1);
            expect(resultB).toMatch(/^([A-Z0-9]-){9}[A-Z0-9]$/);
            expect(resultA).not.toEqual(resultB);
        });
        it("should not generate a unique license key as pairs is negative", () => {
            const result = (0, _1.default)(10, -1);
            expect(result).toMatch("");
        });
    });
});
