const Client = require('../index').Client
const Canvas = require('canvas');
Client.on("messageCreate", async (message) => {
    if(message.content.toLowerCase == "yoss")
    {
    const context = canvas.getContext('2d');

	const background = await Canvas.loadImage('./goodbye_background.jpg');

	// This uses the canvas dimensions to stretch the image onto the entire canvas
	context.drawImage(background, 0, 0, canvas.width, canvas.height);

	// Use the helpful Attachment class structure to process the file for you
	const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');

	interaction.reply({ files: [attachment] });
    }
})