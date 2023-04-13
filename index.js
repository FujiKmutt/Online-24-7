const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity('24/7 Online!');
});

client.login(process.env.TOKEN);
