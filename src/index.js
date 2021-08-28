'use strict';

const { ShewenyClient } = require("sheweny");
const YAML = require('yamljs');
const path = require('path');

const config = YAML.load(path.resolve(__dirname, 'config.yml'));
require('dotenv').config;

const client = new ShewenyClient({
  intents: [1 << 0, 1 << 1, 1 << 2, 1 << 8, 1 << 9, 1 << 10, 1 << 12],
  partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"],
  allowedMentions: true,

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
      guildId: '619934518320562178',
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