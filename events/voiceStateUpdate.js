const Client = require('../index').Client
const memberCount = require('../updateMembers')
const { joinVoiceChannel } = require('@discordjs/voice');
const sqlite = require('sqlite3').verbose();
Client.on('voiceStateUpdate', (oldState, newState) => {
  const channelId = "1035898380188143676";
  const guildId = "675316921826148353";
  const channelId1 = "1035898380188143676";
  const channel1 = Client.channels.cache.get("1035898380188143676");
  const adapterCreator = channel1.guild.voiceAdapterCreator
  try
  {
  if(oldState.channelId && newState.channelId){
    joinVoiceChannel({
        channelId,
        guildId,
        adapterCreator
    })
    }
  else if(oldState.channelId && !newState.channelId){
    joinVoiceChannel({
	channelId,
        guildId,
        adapterCreator
    })
    }
    }
  catch(error)
    {
      console.log(error)
    }
});