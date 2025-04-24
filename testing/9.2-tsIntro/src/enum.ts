// 2. 
// enum Direction {
//     // Up = "up" if a value assigned to a var in enum, then all the var needs to be assigned some value implicitly (i.e. Down = "down", etc)
//     Up, // 0
//     Down, // 1
//     Left, // 2
//     Right // 3
// }
// function doSomething(keyPressed: Direction) {
//     if(keyPressed == Direction.Up) {
//         console.log("Up key Pressed")
//     }
// }

// 1.
// type keyType = "Up" | "Down" | "Left" | "Right"

// function doSomething(keyPressed: keyType) {
//     if(keyPressed == "Up") {
//         console.log("up key pressed")
//     }
// }