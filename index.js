const Discord = require('discord.js')
const config  = require('./config')
const Message = require('./Class/Message')

const bot     = new Discord.Client()

bot.on('message', (guild, message) => {
  if (message.content === '!test') {
    message.reply('test ok')
  }
  if (/Antho/i.test(message.content) || /tribu/.test(message.content)) {
    message.reply("Tu veux peut être en savoir plus : #petit-topo")
  }

  Message.isQuestion(message)
  Message.
})

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send(`Bienvenue à toi :) ${member.displayName}, merci de commencer par te présenter sur #presentation`)
  }).catch(console.error)
})

bot.login(config.token)