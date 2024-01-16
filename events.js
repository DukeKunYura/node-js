var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("message", (data, arg) => {
  console.log("Message: " + data + arg);
});

const MESSAGE = process.env.MESSAGE || "void";

const send = () => {
  if (MESSAGE === "void") {
    eventEmitter.emit("message", "text message ", 555);
  }

  if (MESSAGE === "Hello") {
    eventEmitter.emit("message", "text message Hello ", 555);
    eventEmitter.emit("message", "text message Hello ", 555);
    eventEmitter.emit("message", "text message Hello ", 555);
  }
};

module.exports = { send };
