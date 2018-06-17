//https://hackernoon.com/unit-testing-node-js-38cf2b7e1a41
//maybe?

const test = require('tape')
const stringUtils = require('./strings.js')

test('lowercase should make everything in the original string lower case', function(t) {
	const result = stringUtils.lowercase('Testing lowerCase')
	const expected = 'testing lowercase'

	t.ok(result)
	t.deepEqual(result, expected)

	t.end()
});
