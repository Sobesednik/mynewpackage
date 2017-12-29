const assert = require('assert')
const context = require('../context/')
const mynewpackage = require('../../src/')

const mynewpackageTestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof mynewpackage, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            mynewpackage()
        })
    },
}

module.exports = mynewpackageTestSuite
