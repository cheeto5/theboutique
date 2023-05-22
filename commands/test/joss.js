const {discord, MessageAttachment, MessageEmbed} = require("discord.js")
const Canvas = require("canvas")
var path = require('path')
var permissions = ["MANAGE_CHANNELS"]
module.exports.run = async (Client, message, args, prefix) => {
    if(!message.member.permissions.has(permissions[0]))
    {
        const errorEmbed = new MessageEmbed().setDescription(`<@${message.author.id}> Missing permissions: [${permissions[0]} ${permissions[2]}]`).setColor("#FF0000")
        return message.channel.send({embeds: [errorEmbed]}).then(msg =>{
            setTimeout(() => msg.delete(), 10000)
        })
    } 
    function fontFile (name) {
        return path.join(__dirname, '../../fonts/', name)
      }
      
    Canvas.registerFont(fontFile('Uni_Sans_Heavy_Regular.ttf'), {family: 'Uni_Sans_Heavy'})

    const canvas = Canvas.createCanvas(1024, 500);
    const context = canvas.getContext('2d');

	const background = await Canvas.loadImage('./goodbye_background.jpg');

	// This uses the canvas dimensions to stretch the image onto the entire canvas
	context.drawImage(background, 0, 0, canvas.width, canvas.height);

	// Use the helpful Attachment class structure to process the file for you
    //const avatar = await Canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg',size:1024 }));
    //context.strokeRect(0, 0, canvas.width, canvas.height);
    context.font = '60px Uni_Sans_Heavy_Regular';
    context.fillText(`GOODBYE`, 400, 350);
    //x = canvas.width / 2 - avatar.width / 2
    //y = canvas.height / 2 - avatar.height / 2
    //context.strokeRect(0, 0, canvas.width, canvas.height);
    /*context.beginPath();
    context.arc(125, 125, 100, 0, Math.PI * 2, true);
    context.closePath();
    context.clip();*/
    context.beginPath();
    context.arc(509.5, 171.8, 120, 0, Math.PI * 2, true);
    context.strokeStyle = '#FFFFFF';
    context.lineWidth = 13;
    context.stroke();
    context.save();
    context.closePath();
    context.clip();
    const avatar = await Canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg'}));
    context.drawImage(avatar, 378, 39, 268, 268);

    /*context.beginPath();
    context.arc(122.5, 141.8, 81, 0, Math.PI * 2, true);
    context.strokeStyle = '#000000';
    context.lineWidth = 6;
    context.stroke();
    context.save();
    context.closePath();
    context.clip();
    context.strokeStyle = '#ffffff';
    context.strokeRect(0, 0, canvas.width, canvas.height);
    context.drawImage(avatar, 150, 25, 200, 200);*/



    const attachment = new MessageAttachment(canvas.toBuffer());
	message.reply({ files: [attachment] });
}
module.exports.help = {
    name: "yoss",
    aliases: ["yossef"]

}