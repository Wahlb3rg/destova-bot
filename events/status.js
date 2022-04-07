const botconfig = require("../botconfig.json");
const { MessageEmbed } = require('discord.js');
const fivereborn = require('fivereborn-query'); // tager reborn query (bruges til at sætte bot activity)
module.exports = function (client) {

    function activity() { // laver funktionen activity
        setTimeout(() => { // laver et loop
            fivereborn.query(botconfig.ip, botconfig.ipport, (err, data) => { // starter fivereborn event, IP:PORT
                if (err) { // logger hvis der er fejl
                    console.log(err);
                    console.log(data); // logger fejlen
                } else {//  ellers skal den sætte activity
                    
                    
                    /*let myGuild = client.guilds.get(clientconfig.serverID);
                    let memberCount = myGuild.memberCount;
                    let memberCountChannel = myGuild.channels.get(clientconfig.memberchannelID);
                    memberCountChannel.setName("Member•" + memberCount + "•User")*/


                    if (data.clients <= 5) {
                        client.user.setPresence({ activities: [{ name: `Få folk i byen`, type: 'WATCHING' }] });
                        client.channels.cache.get('947498929715556372').setName(`Antal spillere: ${data.clients}/${data.maxclients}`)//.then(client.channels.cache.get('842471936952631336').send('Opdaterde antal'))
                    } else if (data.clients == 32) {
                        client.user.setPresence({ activities: [{ name: `Byen er helt fyldt op :pog:`, type: 'WATCHING' }] });
                        client.channels.cache.get('947498929715556372').setName(`Antal spillere: ${data.clients}/${data.maxclients}`)
                    } else {
                        client.user.setPresence({ activities: [{ name: `${data.clients} i byen`, type: 'WATCHING' }] });//  /${data.maxclients}
                        client.channels.cache.get('947498929715556372').setName(`Antal spillere: ${data.clients}/${data.maxclients}`)
                    }

                }
                if (err) console.log(err);
            });
            activity();
        }, 10000);
    }
    activity();

}