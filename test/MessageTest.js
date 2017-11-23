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

    describe('capslock', () => {
        it('should message is full uppercase', function () {
            const message = {content: 'ET LA LZAZZ ZEZEZE ZEZEZE'}
            assert.equal(Message.isFullUpperCase(message), true)
        })

        it('should message is not full uppercase', function () {
            const message = {content: 'Je fait Une PHRASE normal'}
            assert.equal(Message.isFullUpperCase(message), false)
        })

        it('should message is emoticons', function () {
            const message = {content: ':D :D :D :D :D :F'}
            assert.equal(Message.isFullUpperCase(message), false)
        })
    })
})