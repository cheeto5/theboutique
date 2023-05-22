module.exports = Client => {
const channelId = '1035898380188143676'
		
	const updateMembers = guild => {
	const guild1 = Client.guilds.cache.get("675316921826148353")
    //if(guild === guild1) return;
    const channel = guild1.channels.cache.get(channelId)
	channel.setName(`🌐・Members: ${guild.memberCount.toLocaleString()}`)
	channel.setName(`🌐・Members: ${guild.memberCount.toLocaleString()}`)
        Client.user.setActivity({ name: `${guild.memberCount.toLocaleString()} Members` , type: 'WATCHING' });
	}
	
	Client.on('guildMemberAdd', (member) => updateMembers(member.guild))
	Client.on('guildMemberRemove', (member) => updateMembers(member.guild))
	
	const guild = Client.guilds.cache.get('675316921826148353')
	updateMembers(guild)
}