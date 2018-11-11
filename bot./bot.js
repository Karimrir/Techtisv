const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('Hello I'm Bot by Owner Karimrirwashdjss');
  	}
});

process.env.BOT_TOKEN
client.login(NTExMTc1NzYzNTc2NDg3OTY3.DsnFMg.2FovrntB78bUAgqZgSG8386DZ1s);
