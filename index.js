const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTg3MTk5OTg0MjU2OTQyMTEw.XPzPZA.koCiV87oBzX2AffosNlfPDMk0QA';

var prefix = "?";


bot.on('ready', () =>{
    console.log('Bot已經Online了喲！')
})

bot.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.toLowerCase().startsWith(prefix + `help`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: Vulnix Help`)
    .setColor(0xCF40FA)
    .setDescription(`Hello! I'm Vulnix, the Discord bot for super cool support ticket stuff and more! Here are my commands:`)
    .addField(`Tickets`, `[${prefix}new]() > Opens up a new ticket and tags the Support Team\n[${prefix}close]() > Closes a ticket that has been resolved or been opened by accident`)
    .addField(`Other`, `[${prefix}help]() > Shows you this help menu your reading\n[${prefix}ping]() > Pings the bot to see how long it takes to react\n[${prefix}about]() > Tells you all about Vulnix`)
    message.channel.send({ embed: embed });
  }

    
bot.login(token);
