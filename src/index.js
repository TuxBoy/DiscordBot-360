const path     = require('path')
const config   = require('../config')
const settings = require(__dirname + '/settings')
const Message  = require('./Class/Message')
const Commando = require('discord.js-commando')

const bot     = new Commando.Client()

bot.registry.registerGroup('projet', 'Project')
bot.registry.registerGroup('rules', 'Rules')

bot.registry.registerCommandsIn(__dirname + '/commands')
bot.registry.registerDefaults()

bot.on('ready', () => {
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guild`)
  if (config.dev) {
    bot.user.setGame('En cours de dev')    
  } else {
    bot.user.setGame(settings.game)
  }
  bot.user.setUsername(settings.username)
})

bot.on('message', message => {
  if (message.author.id === bot.user.id) {
    return;
  }
  if (Message.isQuestion(message.content)) {
    message.reply(" :cop: Tu peux poser ta question directement pour avoir une chance que l'on t'aide :)")
  }
  if (Message.isMentionOnlyMember(message)) {
    message.reply(`:cop: Tu ne peux pas mentioner un membre sans message`)
  }
  if (Message.isFullUpperCase(message)) {
    message.reply(`:cop: Pas la peine de s'énerver`)
  }

})

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send(`Bienvenue à toi :) ${member.displayName}, merci de commencer par te présenter sur #presentation`)
  }).catch(console.error)
})

bot.login(config.token)