const string = require('string')

module.exports = class Message
{

  /**
   *
   * @param message
   */
  static isQuestion (message) {
    let content = message.content
    return content.substr(-1) === '?' && (/quelqu/gi.test(content) || /connait/i.test(content))
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
      if (/<@\d+>/.test(item)) {
        memberId = item
      }
    })
    return arrayString.length == 1 && memberId && message.mentions.members;
  }

  static isFullUpperCase (message) {
    return (message.content === message.content.toUpperCase() && message.content.length >= 4);
  }

}