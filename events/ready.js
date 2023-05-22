const Client = require('../index').Client
const memberCount = require('../updateMembers')
const { joinVoiceChannel } = require('@discordjs/voice');
const sqlite = require('sqlite3').verbose();

Client.on('ready', async () => {
    Client.user.setPresence({ activities: [{ name: "Joss", type: "WATCHING"}]})
    console.log(`${Client.user.tag} is online!`)
    let db = new sqlite.Database('./server.db', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE)
    db.run('CREATE TABLE IF NOT EXISTS data(serverid INTEGER NOT NULL, prefix TEXT NOT NULL, members INTEGER NOT NULL)')
    let query = `SELECT * FROM data WHERE serverid = ?`;
    db.get(query, ['675316921826148353'], (err,row) =>{
        if(err){ console.log(err)
        return}
    if(row == undefined)
    {
    let insertdata = db.prepare("INSERT INTO data VALUES (?,?,?)")
    insertdata.run('675316921826148353', '-', '0')
    insertdata.finalize();
    db.close();
    return;
    }else{
        console.log(`(DATABASE) LOADED serverid(${row.serverid} members(${row.members}) prefix(${row.prefix})`)
    }
})
    try
    {
    const channel1 = Client.channels.cache.get("1035898380188143676");
    if (!channel1) return console.error("The channel does not exist!");
    memberCount(Client);
    joinVoiceChannel({
        channelId: "1035898380188143676",
        guildId: "675316921826148353",
        adapterCreator: channel1.guild.voiceAdapterCreator
    })
    }
    catch(error)
    {
        console.log(error)
    }

})