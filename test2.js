const discord = require("discord.js")
//const client = new Discord.Client();
const uuid = require('uuid');
const request = require('request');
const fs = require('fs');

const Client = new  discord.Client({
    intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MEMBERS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.DIRECT_MESSAGES, discord.Intents.FLAGS.GUILD_VOICE_STATES],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true}
})

Client.on('ready', () => {
console.log("Bot is ready");
});

Client.on('message', message => {
if (message.content === '.save') {
try {
const url = message.attachments.array()[0].url; // check for an image, throw error if none found
} catch (error) {
console.log("Error: No attachments");
message.reply("No attachments detected!");
}
} else {
if (url.substring(0, 26) === "https://cdn.discordapp.com") { // look to see if url is from discord
request.get(url, {encoding: null}, (error, response, body) => {
const imageName = `${uuid.v4()}.png`; // uuid creates random unique id to use for image names
fs.writeFile(imageName, body, 'binary', (error) => {
console.log(`Saving image: ${imageName}`);
});
});
}
}

});

Client.login('TOKEN');
