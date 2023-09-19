const { LoadCommands, AoiClient } = require("aoi.js");
const keepAlive = require(`./server`);

const { Util } = require('aoi.js');
const { parse, createAst } = require('aoi.parser');
const {
    parseExtraOptions
} = require('aoi.parser/components');

Util.parsers.ErrorHandler = parse;

Util.parsers.OptionsParser = (data) => {
    return createAst(data).children.map(parseExtraOptions);
}


const bot = new AoiClient({
    token: "TOKEN HERE",
    prefix: "aoi!",
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildBans", "GuildVoiceStates", "GuildMessageTyping", "GuildMembers", "GuildInvites", "GuildMessageReactions", "GuildPresences"],
    events: ["onMessage", "onBanAdd", "onBanRemove", "onMessageDelete", "onMessageUpdate", "onChannelCreate", "onChannelDelete", "onChannelUpdate", "onMemberUpdate", "onGuildJoin", "onGuildLeave", "onJoin", "onLeave", "onInteractionCreate", "onReactionAdd", "onVoiceStateUpdate", "onFunctionError", "onPresenceUpdate"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue",
        }

    },
    respondOnEdit: {
        commands: true
    },
    disableFunctions: ["$clientToken", "$setClientAvatar"],

    suppressAllErrors: true

})
require('./variables/variables')(bot);
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/")


bot.interactionCommand({
    name: "newticket",
    prototype: 'button',
    code: `
      $setGuildVar[tsn;$sum[$getGuildVar[tsn];1]]
      $newTicket[🎫|ticket-$getGuildVar[tsn];<@&1134815753862914149><@$authorId>{newEmbed: {description:
    
    Hello and greetings, please be patient until staff's team responds and refrain from commenting
  
  
    You can use the panel below to close&save the ticket.
  
  Reason:\`$textInputValue[reason]\`
      } {color: $getVar[color]} {title: New Ticket}}{actionRow:{button:Close Ticket:success:closeticket:false} {button:Save Ticket:success:save:false}};$getGuildVar[tcs];false;Error!]
     $cooldown[30s; You Can Open New Ticket In %time% {options:{ephemeral}}
  {extraOptions:{interaction}}]
      `
  });

keepAlive();