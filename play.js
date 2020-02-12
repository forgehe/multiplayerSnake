const { connect } = require("./client");
console.log("Connecting ...");
connect();

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", key => {
    process.stdout.write(handleUserInput(key));
  });
  return stdin;
};

const handleUserInput = key => {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    return "Move: up";
  }
  if (key === "a") {
    return "Move: left";
  }
  if (key === "s") {
    return "Move: down";
  }
  if (key === "d") {
    return "Move: right";
  }
  return key;
};

// stdin.on("data", key => {
//   if (key === "\u0003") {
//     process.exit();
//   }
//   if (key === "w") {
//     stdin.write("Move: up");
//   }
// });
setupInput();
