const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTg3MTk5OTg0MjU2OTQyMTEw.XPzPZA.koCiV87oBzX2AffosNlfPDMk0QA';

var prefix = "?";


bot.on('ready', () =>{
    console.log('Bot已經Online了喲！')
})

if (message.content.toLowerCase().startsWith(prefix + `enable`)) {
    message.channel.send(`:white_check_mark: Enabled oldsion`);

if (message.content.toLowerCase().startsWith(prefix + `disable`)) {
    message.channel.send(`:white_check_mark: Disabled oldsion`);

if (message.content.toLowerCase().startsWith(prefix + `info`)) {
    message.channel.send(`Hi, i am a anti-virus bot that made by oold. I am going to extinct the virus if i see them!`);
    
bot.login(token);
