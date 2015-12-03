var test = require('tape')
var tupleEnc = require('.')

test('identity', function (assert) {
  var codec = tupleEnc(['foo', 'bar'])
  assert.deepEqual(codec.decode(codec.encode({foo: 'baz', bar: 'qux'})), {foo: 'baz', bar: 'qux'}, 'Simple')
  assert.deepEqual(codec.decode(codec.encode({bar: 'qux', foo: 'baz'})), {bar: 'qux', foo: 'baz'}, 'Order preserved')

  assert.end()
})
