'use strict';

const { ShewenyClient } = require("sheweny");

require('dotenv').config();

const client = new ShewenyClient({
  intents: [1 << 0, 1 << 1, 1 << 2, 1 << 8, 1 << 9, 1 << 10, 1 << 12],
  partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"],


  presence: {
    activities: [
      {
        name: '/help',
        type: 1, //Streaming
        url: 'https://www.twitch.tv/abyo_tv',
      },
    ],
    afk: false,
    status: 'idle'
  },

  handlers: {
    applicationCommands: {
      directory: "./commands",
      // guildId: 'somecrazyID', If you don't want global commands, remove the // and insert your guild ID.
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

client.login(process.env.DISCORD_TOKEN);
