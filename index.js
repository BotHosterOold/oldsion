const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTg3MTk5OTg0MjU2OTQyMTEw.XPzPZA.koCiV87oBzX2AffosNlfPDMk0QA';

var prefix = "?";


bot.on('ready', () =>{
    console.log('Bot已經Online了喲！')
})

if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`Please wait`).then(m => {
    m.edit(`Sucess`);
}
    
bot.login(token);
