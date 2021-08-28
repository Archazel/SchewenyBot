const { ShewenyClient } = require("sheweny");
const config = require("../config");

const client = new ShewenyClient({
  intents: ["GUILDS"],
  handlers: {
    applicationCommands: {
      directory: "./commands",
    },
    events: {
      directory: "./events",
    },
    buttons: {
      directory: "./interactions/buttons",
    },
    selectMenus: {
      directory: "./interactions/selectmenus",
    },
    inhibitors: {
      directory: "./inhibitors",
    },
  },
});

client.login(config.DISCORD_TOKEN);
