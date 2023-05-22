const discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

var permissions = ["ADMINISTRATOR", "MANAGE_CHANNELS"]
permissions.toString().replace(",",", ")
module.exports.run = async (Client, message, args, prefix) => {
    message.delete();
    if(!message.member.permissions.has(permissions[0] && permissions[1]))
    {
        const errorEmbed = new MessageEmbed().setDescription(`<@${message.author.id}> Missing permissions: [${permissions[0]} ${permissions[2]}]`).setColor("#FF0000")
        return message.channel.send({embeds: [errorEmbed]}).then(msg =>{
            setTimeout(() => msg.delete(), 10000)
        })
    } //return  errorPermissions(message.member, message.channel, permissions)
    const Embed1 = new MessageEmbed().setDescription("Pong!").setColor("#FF0000")
    message.channel.send({embeds: [Embed1]}).then(msg => {
        setTimeout(() => msg.delete(), 10000)
    })
}
function errorPermissions(member,channel, reqpermissions)
{
    const errorEmbed = new MessageEmbed().setDescription(`Missing permissions: [${reqpermissions}]`).setColor("#FF0000")
    if(!member.permissions.has(permissions[0] && permissions[1]))
    {
    //permissions.toString().replace(",","," + " ")
    return channel.send({embeds: [errorEmbed]}).then(msg =>{
        setTimeout(() => msg.delete(), 10000)
    })
}
}
module.exports.help = {
    name: "ping",
    aliases: ["p"]

}