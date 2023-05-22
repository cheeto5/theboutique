const Client = require('../index').Client
const { MessageEmbed } = require('discord.js');
Client.on("messageCreate", (message) => {
    if(message.author.bot || message.channel.type == 'DM') return
    if(message.guild.id !== '675316921826148353') return
    if(message.channel.id == '675318747766063106' && message.content.includes("youtube.com","youtu.be")){
        //if(message.author.id == '418551193778782209')
        var yos = Math.floor(Math.random() * 5) + 1;
        message.delete();
        const Embed1 = new MessageEmbed().setImage("https://cdn.discordapp.com/attachments/608765260278661132/939591235985899560/Tal10.JPG").setDescription(`**<@${message.author.id}> You are not allowed to send links here!**`).setColor("#FF0000")
        const Embed2 = new MessageEmbed().setImage("https://cdn.discordapp.com/attachments/608765260278661132/939591070612856942/Tal8.JPG").setDescription(`**<@${message.author.id}> You are not allowed to send links here!**`).setColor("#FF0000")
        const Embed3 = new MessageEmbed().setImage("https://cdn.discordapp.com/attachments/608765260278661132/939591093731872819/Tal6.JPG").setDescription(`**<@${message.author.id}> You are not allowed to send links here!**`).setColor("#FF0000")
        
        const Embed4 = new MessageEmbed().setImage("https://cdn.discordapp.com/attachments/608765260278661132/939590414829256784/unknown.png").setDescription(`**<@${message.author.id}> You are not allowed to send links here!**`).setColor("#FF0000")
        const Embed5 = new MessageEmbed().setImage("https://cdn.discordapp.com/attachments/608765260278661132/939590223195701338/unknown.png").setDescription(`**<@${message.author.id}> You are not allowed to send links here!**`).setColor("#FF0000")
        const Embed6 = new MessageEmbed().setImage("https://cdn.discordapp.com/attachments/608765260278661132/939589948493950996/unknown.png").setDescription(`**<@${message.author.id}> You are not allowed to send links here!**`).setColor("#FF0000")
                
        if(message.author.id == '401404344223924234')
        {
        switch(yos)
        {
        case 1: return message.channel.send({embeds: [Embed1]}).then(msg => {
            setTimeout(() => msg.delete(), 10000)
          })
        case 2: return message.channel.send({embeds: [Embed2]}).then(msg => {
            setTimeout(() => msg.delete(), 10000)
          })
        default: return message.channel.send({embeds: [Embed3]}).then(msg => {
            setTimeout(() => msg.delete(), 10000)
          })
        }
    }else if(message.author.id == '350662746754383872')
    {
        switch(yos)
        {
        case 1: return message.channel.send({embeds: [Embed4]}).then(msg => {
            setTimeout(() => msg.delete(), 10000)
          })
        case 2: return message.channel.send({embeds: [Embed5]}).then(msg => {
            setTimeout(() => msg.delete(), 10000)
          })
        default: return message.channel.send({embeds: [Embed6]}).then(msg => {
            setTimeout(() => msg.delete(), 10000)
          })
        }
    }else if(message.author.id == '273760624511549441')
    {
        const Embed7 = new MessageEmbed().setDescription(`**<@${message.author.id}> You are not allowed to send links here!**`).setColor("#FF0000")
        message.channel.send({embeds: [Embed7]}).then(msg => {
            setTimeout(() => msg.delete(), 10000)
    })
}
}
})
