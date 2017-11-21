const fs       = require('fs')
const Commando = require('discord.js-commando')

/**
 */
class RulesCommand extends Commando.Command {

  constructor (client) {
    super(client, {
      name: 'rules',
      group: 'rules',
      memberName: '360',
      description: 'Display discord server rules'
    })
  }

  async run(message, args) {
  }

}

module.exports = RulesCommand