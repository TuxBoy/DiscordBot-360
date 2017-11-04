const path     = require('path')
const Commando = require('discord.js-commando')
const settingsGithub = require(path.dirname(path.dirname(__dirname)) + '/settings.js').github

/**
 * This command displays the project repo link.
 */
class RepoCommand extends Commando.Command {

  constructor(client) {
    super(client, {
      name: 'repo',
      group: 'projet',
      memberName: '360',
      description: 'Access 360dev repository Github'
    })
  }

  async run(message, args) {
    return message.reply(`Voici le lien du dépôt github de 360° Dev : ${settingsGithub.link}`)
  }

}

module.exports = RepoCommand