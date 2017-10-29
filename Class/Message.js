module.exports = class Message
{

  /**
   *
   * @param message
   */
  static isQuestion (message) {
    if (message.content.substr(-1) === '?') {
      message.reply(" :cop: Tu peux poser ta question directement pour avoir une chance que l'on t'aide :)")
    }
  }

  static formatChangeLogMessage(guild, message) {
    // Il faut que je vérifie que le message soit bien taper depuis le channel guild
    // Je vérifie le format du message

  }

}