const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('uptime')
        .setDescription('Viser hvor lang tid botten har været tændt!')
    ,

    async execute(interaction, client) {

        /*let totalSeconds = (client.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);

        let uptimeEmbed = new MessageEmbed()
            .setTitle(`Bot Uptime`)
            .setColor("#e56b00")
            .setDescription(`Timer: ${hours}\nMinutter: ${minutes}`)
            .setTimestamp()
        //.setFooter({ text: `Lavet af wahlberg#6270` })*/


        await interaction.reply({
            content: 'Ja det virker ikke helt endnu',
            //embeds: [uptimeEmbed],
            ephemeral: true
        });
    },
};