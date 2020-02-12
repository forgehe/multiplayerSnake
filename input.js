let connection;
const setupInput = function(conn) {
  // Stores the active TCP connection object.
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", key => {
    let output = handleUserInput(key);
    process.stdout.write(output);

    if (key === "w") {
      connection.write("Move: up");
    }
    if (key === "a") {
      connection.write("Move: left");
    }
    if (key === "s") {
      connection.write("Move: down");
    }
    if (key === "d") {
      connection.write("Move: right");
    }
    if (key === "e") {
      connection.write("Say: hewwo");
    }
  });
  return stdin;
};

const handleUserInput = key => {
  if (key === "\u0003") {
    process.exit();
  }
  return key;
};

module.exports = { setupInput };
