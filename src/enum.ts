/*
    Enums allow a developer to define a set of named constants. 
    Using enums can make it easier to document intent, or create a set of distinct cases. 
    TypeScript provides both numeric and string-based enums.
*/


// Numeric Enum
// Up is initialized with 1. All of the following members are auto-incremented from that point on. 
// In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}

// String Enum
enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}