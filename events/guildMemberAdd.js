const Client = require('../index').Client
Client.on("guildMemberAdd", member => {
    try
    {
    member.roles.add('675318718053482507')
    }
    catch(error)
    {
        console.log(error)
    }
})