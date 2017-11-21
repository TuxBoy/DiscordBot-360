const path     = require('path')
const Commando = require('discord.js-commando')
const settingsGithub = require(path.dirname(path.dirname(__dirname)) + '/settings.js').github

/**
 * This command displays the project repo link.
 */
class RBotCommand extends Commando.Command {

  constructor(client) {
    super(client, {
      name: 'rbot',
      group: 'projet',
      memberName: '360-bot',
      description: 'Access 360 bot repository Github'
    })
  }

  async run(message, args) {
    return message.reply(`Voici le lien du dépôt github du Bot de 360 : ${settingsGithub.rbot}`)
  }

}

module.exports = RBotCommand