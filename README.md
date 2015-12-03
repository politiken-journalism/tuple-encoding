`tuple-encoding`
================

> Encode/decode an Object as a tuple to preserve order

Usage
-----

```js

var tupleEncoding = require('tuple-encoding')

var enc = tupleEncoding(['foo', 'bar'])

enc.encode({foo: 'baz', bar: 'qux'}) // baz~qux

enc.decode('baz~qux') // {foo: 'baz', bar: 'qux'}
```

API
---

```jsig
tupleEncoding : (
  keys: Array<String>,
  delimiter?: String
) => {
  encode: Function(obj: Object),
  decode: Function(str: String)
}
```

Known issues
------------

The delimiter used is currently not escaped. This is also illustrated with a
failing test case for `.decode`

License
-------

[ISC](LICENSE)
