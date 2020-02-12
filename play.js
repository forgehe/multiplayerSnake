const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

// stdin.on("data", key => {
//   if (key === "\u0003") {
//     process.exit();
//   }
//   if (key === "w") {
//     stdin.write("Move: up");
//   }
// });
// if (key === "w") {
//   return "Move: up";
// }
// if (key === "a") {
//   return "Move: left";
// }
// if (key === "s") {
//   return "Move: down";
// }
// if (key === "d") {
//   return "Move: right";
// }
