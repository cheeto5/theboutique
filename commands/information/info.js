const {discord, MessageEmbed} = require("discord.js")
const os = require('os')
module.exports.run = async (Client, message, args, prefix) => {
    if(!message.guild.me.permissions.has("EMBED_LINKS")) return message.reply("Hmm... seems like I don't have permissions to do that.")
    var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();
    var  getpercentage = 
  ((usedMemory/totalMemory) * 100).toFixed(2) + '%'
  const cpus = os.cpus();
    const cpu = cpus[0];
    const total = Object.values(cpu.times).reduce(
        (acc, tv) => acc + tv, 0);
    const usage = process.cpuUsage();
    const currentCPUUsage = (usage.user + usage.system) * 1000;
    const perc = currentCPUUsage / total * 100;

    const infoEmbed = new MessageEmbed().setTitle(message.guild.me.displayName)
    //.addField('Created at: ', Client.user.createdAt(), true)
    .addField('Current database file: ', 'server.db', true)
    .addField("Memory in use: ", getpercentage > 90 ? (`${getpercentage} (LOW)`) : (`${getpercentage} (HIGH)`), true)
    .addField("CPU in use: ", `Currently high`,true)
    return message.reply({embeds: [infoEmbed]})
}
module.exports.help = {
    name: "information",
    aliases: ["info"]

}