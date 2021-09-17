const Discord = require("discord.js");
const fs = require("fs");
require("dotenv").config();

const client = new Discord.Client();
const config = {
  token: process.env.TOKEN,
  prefix: process.env.RIJAN_PREFIX,
};
client.config = config;
client.queue = new Map();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[Command Manager]: Loading Command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

// BOT STATUS
client.once('ready', () => { 
  console.log(`Logged in as ${client.user.tag}.`);
  
  const activities = [
          `to .help💖`,
          `Song List📜`,
          `Already 234K Users🎧 `,	
          ];
        let i = 0;
        setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'LISTENING' }), 9000);
});

client.login(process.env.TOKEN);

//Music Nepal Made By Xnique 
//Music Nepal Made By Xnique 
//Music Nepal Made By Xnique 
//Music Nepal Made By Xnique 
//Music Nepal Made By Xnique 
//Music Nepal Made By Xnique 
//Music Nepal Made By Xnique 
//Music Nepal Made By Xnique 
//Music Nepal Made By Xnique 
//Music Nepal Made By Xnique 
//Music Nepal Made By Xnique 