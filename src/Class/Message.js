const S = require('string')

module.exports = class Message
{

  /**
   *
   * @param message string
   */
  static isQuestion (content) {
    let regex = /^(bonjour |salut )?([^ ]+ ){0,3}(qui s'y conna(î|i)(t|s)|des gens|quelqu'un|qqun|des personnes)[^\?]+\?$/i 
    return regex.test(content)
  }

  static badFormatChangeLogMessage (message) {
    // Il faut que je vérifie que le message soit bien taper depuis le channel guild
    // Je vérifie le format du message
  }

  /**
   * True if the string contains only one mention.
   * @param member
   * @returns {boolean|*|Collection.<Snowflake, GuildMember>|Collection<Snowflake, GuildMember>|string|?Collection.<Snowflake, GuildMember>}
   */
  static isMentionOnlyMember (message) {
    let arrayString = message.content.split(' ')
    let memberId
    arrayString.forEach(item => {
      if (/<@\d+>/i.test(item)) {
      console.log('azeazzau', memberId)
    
        memberId = item
      }
    })
    
    return arrayString.length == 1 && memberId;
  }

  static isFullUpperCase (message) {
    return (
      message.content === message.content.toUpperCase() 
      && !S(message.content).isNumeric()
      && S(message.content).length >= 4
      && !this.isMentionOnlyMember(message)
    );
  }

}