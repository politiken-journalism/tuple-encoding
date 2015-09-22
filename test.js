var test = require('tape')
var tupleEnc = require('.')

test('encode', function (assert) {
  assert.equal(tupleEnc(['foo', 'bar']).encode({foo: 'baz', bar: 'qux'}), 'baz~qux', 'Simple')
  assert.equal(tupleEnc(['foo', 'bar']).encode({bar: 'qux', foo: 'baz'}), 'baz~qux', 'Order preserved')
  assert.equal(tupleEnc(['foo', 'bar']).encode({foo: 'baz~', bar: 'qux'}), 'baz~~qux', 'Encodes delimiter')

  assert.equal(tupleEnc(['foo', 'bar'], '#').encode({foo: 'baz', bar: 'qux'}), 'baz#qux', 'Custom delimiter')

  assert.end()
})

test('decode', function (assert) {
  assert.deepEqual(tupleEnc(['foo', 'bar']).decode('baz~qux'), {foo: 'baz', bar: 'qux'}, 'Simple')
  assert.deepEqual(tupleEnc(['foo', 'bar']).decode('baz~qux'), {bar: 'qux', foo: 'baz'}, 'Order preserved')
  assert.deepEqual(tupleEnc(['foo', 'bar']).decode('baz~~qux'), {foo: 'baz~', bar: 'qux'}, 'Encodes delimiter')

  assert.deepEqual(tupleEnc(['foo', 'bar'], '#').decode('baz#qux'), {foo: 'baz', bar: 'qux'}, 'Custom delimiter')

  assert.end()
})
