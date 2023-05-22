const Discord = require('discord.js');
const client = new Discord.Client({
  ws: {
    intents: Discord.Intents.ALL
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  if (message.channel.id === '767133267282362398' && message.attachments.size > 0) {
    const targetChannel = message.guild.channels.cache.get('1074332012556603413');

    message.attachments.forEach(attachment => {
      targetChannel.send(attachment.url);
    });
  }
});

client.login('NzQ3ODQ1NzI2OTMwOTkzMTcz.GXA5zA.8YxptfmbnCWqS656WF8il6yEJpzOVclmsY0xVI');
