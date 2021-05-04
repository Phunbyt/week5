"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("../task/app"));
var mock_1 = require("./mock");
describe("Test for function structure", function () {
    it("Returns an object for even distro", function () {
        var expected = app_1.default(25, 1);
        expect(typeof expected).toBe("object");
    });
    it("checks that the function is called with 2 arguments", function () {
        expect(app_1.default.length).toBe(2);
    });
});
describe("Test for function expected value", function () {
    it("Returns evenly distributed values for boarded", function () {
        var expected = app_1.default(50, 1).boarded.length;
        expect(expected % 5).toEqual(0);
    });
    it("Returns reservation list for uneven distro", function () {
        var expected = app_1.default(53, 1).reservation.length;
        expect(expected % 5).toEqual(3);
    });
    it("boarded does not exceed 50 people for 60 passengers with shuffle of 0", function () {
        var expected = app_1.default(60, 0).boarded.length;
        expect(expected).toEqual(50);
    });
});
describe("test for shuffle", function () {
    it("Single shuffle works ", function () {
        var expected = app_1.default(100, 1).boarded.length;
        var expectedCount = app_1.default(100, 1).count;
        expect(expected).toEqual(50);
        expect(expectedCount).toEqual(2);
    });
    it("first multiple shuffle works ", function () {
        var expected = app_1.default(259, 3).boarded.length;
        var expectedCount = app_1.default(259, 3).count;
        var expectedRes = app_1.default(259, 3).reservation.length;
        expect(expected).toEqual(50);
        expect(expectedCount).toEqual(4);
        expect(expectedRes).toEqual(59);
    });
    it("second multiple shuffle works ", function () {
        var expected = app_1.default(209, 3);
        expect(expected.count).toEqual(4);
    });
    it("third multiple shuffle works ", function () {
        var expected = app_1.default(259, 4);
        expect(expected.count).toEqual(5);
    });
});
describe("test for boarded value with passengers of 50 and shuffle 0", function () {
    var passengers = 50;
    var shuffle = 0;
    var expected = app_1.default(passengers, shuffle);
    expect(expected.boarded).toStrictEqual(mock_1.prefilled);
});
