const discord = require("discord.js")
const {MessageEmbed} = require("discord.js")
const { token } = require ('./config.json')
const { logger } = require("./logger");
const fs = require('fs')
const sqlite = require('sqlite3')
const Client = new  discord.Client({
    intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MEMBERS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.DIRECT_MESSAGES, discord.Intents.FLAGS.GUILD_VOICE_STATES],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true}
})

Client.commands = new discord.Collection();
Client.aliases = new discord.Collection();
Client.events = new discord.Collection();
module.exports.Client = Client
var prefix = '-'
var status = 1;


//Command Handler
fs.readdirSync('./commands/').forEach(dir => {
    fs.readdir(`./commands/${dir}`, (err, files) => {
        if (err) console.log(err);
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if (jsFiles.length <= 0) return console.log("Can't find any commands!");

        jsFiles.forEach(file => {
            var fileGet = require(`./commands/${dir}/${file}`);
            console.log(`[COMMAND HANDLER] - File ${file} was loaded`)

            try {
                Client.commands.set(fileGet.help.name, fileGet);
                fileGet.help.aliases.forEach(alias => {
                    Client.aliases.set(alias, fileGet.help.name);
                })

            } catch (err) {
                return console.log(err);
            }
        });
    });
});

//Event Handler
fs.readdirSync('./events/').forEach(file => {
        var jsFiles = fs.readdirSync('./events').filter(f => f.split(".").pop() === "js");
        if (jsFiles.length <= 0) return console.log("[EVENT HANDLER] Can't find any events!");
        let check = false
        jsFiles.forEach(file => {
            const eventGet = require(`./events/${file}`)

            try{
                Client.events.set(eventGet.name, eventGet)
                if(check == false){
                    console.log(`[EVENTS HANDLER] - File ${file} was loaded!`)
                    check = true
                }
            }catch(error){
                return console.log(error)
            }
    });
});
Client.on('messageCreate', async message =>{
/*if (!message.content.startsWith(prefix + 'con')) {

const srcGuild = Client.guilds.cache.get('675316921826148353');
    const srcChannel = srcGuild ? srcGuild.channels.cache.get('767133267282362398') : null;

    const destGuild = Client.guilds.cache.get('1043221648909815879');
    const destChannel = destGuild ? destGuild.channels.cache.get('1074399210532765778') : null;

    if (!srcChannel) {
      return message.reply('Source channel not found.');
    }

    if (!destChannel) {
      return message.reply('Destination channel not found.');
    }

    let lastMessageId;
    let messageLimit = 1000;

    while (messageLimit > 0) {
      const messages = await srcChannel.messages.fetch({ limit: 90, before: lastMessageId });

      messages.forEach(async msg => {
        if (msg.content.includes('sa-mp-')) {
          destChannel.send(msg.content);
          messageLimit--;
        }
      });

      if (messages.size > 0) {
        lastMessageId = messages.last().id;
      } else {
        break;
      }

      await new Promise(resolve => setTimeout(resolve, 120000));
    }
}*/
    if(message.author.bot || message.channel.type == 'DM') return
    /*if(message.content === "-changestatus")
    {
        if(status == 1) 
        {
            status = 0;
            return message.reply("Status: Disabled")
        }else{
            status = 1;
            return message.reply("Status: Enabled")
        }
    }*/
    //if(message.content.startsWith(prefix) && status == 0) return message.reply("Sorry, currently I can't help you.")
    /*var prefix = require('./events/ready').varPrefix;
    if(message.content.toLowerCase() === `${prefix}prefix`)
    {
        let messageArray = message.content.split(" ");
        let args = messageArray.slice[1]
        const errEmbed = new MessageEmbed().setDescription(`Please provide a valid prefix.`)
        if(!args) message.reply({embeds: [errEmbed]})
        let db = new sqlite.Database("../server.db", sqlite.OPEN_READWRITE)
        db.run('UPDATE serverdata SET prefix = ? WHERE serverid = ?)', [args[0], message.guild.id])
        message.reply(`prefix changed to ${args}`)
        prefix = args
        return
    }*/
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice[1]

    let commands = Client.commands.get(cmd.slice(prefix.length)) || Client.commands.get(Client.aliases.get(cmd.slice(prefix.length)));
    if(commands) {
        if(!message.content.startsWith(prefix)) return
        commands.run(Client, message, args, prefix);
        //logger.log(`(COMMAND) ${message.author.tag} ${message} ${args}`)
    }
    try {
    if (message.content.startsWith(prefix + 'cn')) {
        if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply("Hmm... seems like I don't have permissions to do that.")
        if (message.author.bot) return;
        const SayMessage = message.content.slice(4).trim();
        if (!SayMessage) return message.delete();
        Client.user.setUsername(SayMessage)
        message.delete()
    }
    /*if (message.content.startsWith(prefix + 'restart')) {
        if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply("Hmm... seems like I don't have permissions to do that.")
        if (message.author.bot) return;
        function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    console.log('Restarting...')
    .then(msg => Client.destroy())
    .then(() => Client.login(token));
    }
    }*/
    } catch {
            console.log(error)
    }
    switch(message.content.toUpperCase()) {
        case '?RESET':
            resetBot(message.channel);
            break;

        // ... other commands
    }
})
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => Client.destroy())
    .then(() => Client.login(token));
}
Client.login(token)