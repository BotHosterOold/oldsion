const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTg3MTk5OTg0MjU2OTQyMTEw.XPzPZA.koCiV87oBzX2AffosNlfPDMk0QA';

var prefix = "?";


bot.on('ready', () =>{
    console.log('Bot已經Online了喲！')
})

if (message.content.toLowerCase().startsWith(prefix + `enable`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`Oldsion Enabling and Disablement`)
    .setColor(0xCF40FA)
    .setDescription(`Notification:`)
    .addField(`Enabled Oldsion`)
    message.channel.send({ embed: embed });
  }


if (message.content.toLowerCase().startsWith(prefix + `disable`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`Oldsion Enabling and Disablement`)
    .setColor(0xCF40FA)
    .setDescription(`Notification:`)
    .addField(`Disabled Oldsion`)
    message.channel.send({ embed: embed });
  }         

if (message.content.toLowerCase().startsWith(prefix + `disable`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`I am Oldsion`)
    .setColor(0xCF40FA)
    .setDescription(`Hi, i am a anti-virus bot that made by oold. I am going to extinct the virus if i see them!`)
    .addField(`Have a good day`)
    message.channel.send({ embed: embed });
  } 
    
bot.login(token);
