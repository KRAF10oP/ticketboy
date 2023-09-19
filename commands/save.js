module.exports = {
    name: "save",
    type: "interaction",
    prototype: "button",
    code:
      `
      $djsEval[(async () => {
    const discordTranscripts = require("discord-html-transcripts");
    const channel = client.channels.cache.get("$interactionData[channel.id]");
    const ch = client.channels.cache.get("1123858402662162462");
    const attachment = await discordTranscripts.createTranscript(channel, {
        filename: "𑁯🎫ticket-$sub[$getGuildVar[tsn];1].html",
        saveImages: true, 
        poweredBy: false
    });
  
    ch.send({
      files: [attachment]
    });
  
  })();false]
  $channelSendMessage[$getVar[save];\`「🎫」ticket-$sub[$getGuildVar[tsn];1]\` | **Ticket Saved By:** <@$authorId>;false]
  $interactionReply[;{newEmbed: {description:Ticket Saved You Can Close Ticket Now ✅} {color: $getVar[color]}};;;everyone]
  {extraOptions:{interaction}}]
      `
  }