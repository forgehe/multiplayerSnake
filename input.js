const { KEY_PRESSES } = require("./constants");

let connection;
const setupInput = function(conn) {
  // Stores the active TCP connection object.
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", key => {
    handleUserInput(key);
    // process.stdout.write(output);
    // if (KEY_PRESSES[key]) {
    // }
  });
  const handleUserInput = key => {
    // console.log(key);
    if (key === "\u0003") {
      process.exit();
    }
    if (KEY_PRESSES[key]) {
      connection.write(KEY_PRESSES[key]);
    }
    // if (key === "w") {
    //   connection.write("Move: up");
    // }
    // if (key === "a") {
    //   connection.write("Move: left");
    // }
    // if (key === "s") {
    //   connection.write("Move: down");
    // }
    // if (key === "d") {
    //   connection.write("Move: right");
    // }
    // if (key === "e") {
    //   connection.write("Say: hewwo");
    // }
    // return key;
  };
  return stdin;
};

module.exports = { setupInput };
