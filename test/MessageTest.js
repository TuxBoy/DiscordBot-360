const path    = require('path') 
const assert  = require('assert')
const Message = require(path.dirname(__dirname) + '/src/Class/Message')

describe('Message', function () {
    it('should message is question', function () {
        let content = "Salut, qui s'y connaît en ?"
        assert.equal(Message.isQuestion(content), true)
    })

    it('should message is question with other word', function () {
        let content = "Bonjour, des personnes peuvent m'aider ?"
        assert.equal(Message.isQuestion(content), true)
    })

    it ('should message is not question', () => {
        let content = 'Salut comment ça va ?'
        assert.equal(Message.isQuestion(content), false)        
    })

    it ('should only mention in the message', function () {
        // TODO A faire
    })
})