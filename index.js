const dotenv = require("dotenv");
dotenv.config();

const { sum } = require("./lessons/index-five.js");
const { send } = require("./events.js");

send();
