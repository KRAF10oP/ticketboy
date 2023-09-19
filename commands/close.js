module.exports = [{
      name: "ticker-close",
        aliases: ["tc"],
          code: `
          $title[Ticket]
          $description[for apllu click this button]
          $addButton[1;Close Ticket;success;closeticket;false]
          
          $color[$getVar[color]]
          
          `
          },
          {
              name: "closeticket",
                type: "interaction",
                  prototype: "button",
                    code: `$closeticket
                    $wait[5s]
                    $interactionReply[;{newEmbed: {description: This Ticket Close After 5s  💀} {color: $getVar[color]}};;;everyone]`
                    }]