"use strict";
/*
    Enums allow a developer to define a set of named constants.
    Using enums can make it easier to document intent, or create a set of distinct cases.
    TypeScript provides both numeric and string-based enums.
*/
// Numeric Enum
// Up is initialized with 1. All of the following members are auto-incremented from that point on. 
// In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// String Enum
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
