const {discord, MessageEmbed} = require("discord.js")
const sqlite = require("sqlite3")
module.exports.run = async (Client, message, args, prefix) => {
    const emembed = new MessageEmbed().setDescription("Currently, this command is under maintenance.")
    return message.reply({embeds: [emembed]}).then(msg =>{
        setTimeout(() => msg.delete(), 10000)
    })
    const errEmbed = new MessageEmbed().setDescription(`Please provide a valid prefix.`)
    if(!args) message.reply({embeds: [errEmbed]})
    let db = new sqlite.Database("../server.db", sqlite.OPEN_READWRITE)
    db.run('UPDATE serverdata SET prefix = ? WHERE serverid = ?)', [args, message.guild.id])
    message.reply(`prefix changed to ${args}`)

}
module.exports.help = {
    name: "tes",
    aliases: ["test"]

}