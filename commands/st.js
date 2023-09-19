module.exports =[{
    name: "set-ticket",
    aliases:["st"],
    code: `
        $description[for create ticket click this button🌃
    ]
    $title[for connect to us open ticket]
    $color[$getVar[color]]
    $addButton[1;open ticket;secondary;ticket;false;📩]

`
 }, {
    name: "ticket",
    type: "interaction",
    prototype: "button",
    code: `
    $interactionModal[ticket;ticket2;
      {actionRow:
        {textInput:why do you want to open ticket?:1:reason:true:hoya:3:20}
      }]
`
},{
  name: "ticket2",
  type: "interaction",
  prototype: 'modal',
  code: `
  $setGuildVar[reason;$textInputValue[reason]]
  $interactionReply[;{newEmbed: {title: Ticket} {description:
    User: <@$authorID>
    
    Reason: $textInputValue[reason]

} {image: $userAvatar[$findUser[$authorID]]} {color: $getVar[color]}};{actionRow:{button:accept:success:yes:false:✅};;everyone;true]

  `
},{
  name: "yes",
  type: "interaction",
  prototype: "button",
  code:`
  $interactionReply[;{newEmbed: {title: Ticket} {description:
your ticket created :)
    
    Reason: $getGuildVar[reason]

} {image: $userAvatar[$findUser[$authorID]]} {color: $getVar[color]}};;;everyone;true]

$setGuildVar[tsn;$sum[$getGuildVar[tsn];1]]
   $newTicket[🌃 | ticket-$getGuildVar[tsn];<@&1134815753862914149> <@$authorId>{newEmbed: {description:
  Hello and greetings, please be patient until staff's team responds and refrain from commenting


  You can use the panel below to close the ticket.

# Reason:  $getGuildVar[reason]
   } {color: $getVar[color]} {title: New Ticket}}{actionRow:{button:Close Ticket:success:closeticket:false} {button:Save Ticket:success:save:false}};1123856602332659712;false;Error!]
  $cooldown[30s; You Can Open New Ticket In %time% {options:{ephemeral}}
{extraOptions:{interaction}}]
    $interactionReply[ticket your created🙃;;;;everyone;true]
  `
}]