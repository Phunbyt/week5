"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var taskOne = function (passengers, shuffle) {
    //complete your work here
    if (passengers < 1)
        return {
            boarded: [],
            reservation: [],
            count: 0,
        };
    var locations = [
        "Abuja",
        "Benue",
        "Lagos",
        "Katsina",
        "Sambisa",
    ];
    var passArr = Array.from({ length: passengers }).map(function (pass, ind) { return ({
        name: "" + ("passenger" + (ind + 1)),
        location: locations[ind % 5],
    }); });
    var passCount = passArr.length;
    var result = {
        boarded: [{}],
        reservation: [{}],
        count: 0,
    };
    if (passCount < 5) {
        result.reservation = passArr;
    }
    if (passCount <= 50 && passCount > 4) {
        if (passCount % 5 == 0) {
            result.boarded = passArr;
            result.count++;
        }
        else {
            var remaining = passCount % 5;
            result.boarded = passArr.splice(0, passCount - remaining);
            result.reservation = passArr;
            result.count++;
        }
    }
    else {
        while (passArr.length > 49 && shuffle >= 0) {
            if (shuffle < 1) {
                result.boarded = passArr.splice(0, 50);
                result.reservation = passArr;
                result.count++;
            }
            else {
                result.boarded = passArr.splice(0, 50);
                result.count++;
                if (passArr.length < 50 && shuffle > 0) {
                    if (passArr.length < 5) {
                        result.reservation = passArr;
                    }
                    else {
                        console.log(passArr);
                        result.boarded = passArr.splice(0, passArr.length - (passArr.length % 5));
                        result.reservation = passArr;
                        result.count = result.count + 1;
                    }
                }
            }
            shuffle--;
        }
    }
    return result;
};
exports.default = taskOne;
