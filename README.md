`tuple-encoding`
================

> Encode/decode an Object as a tuple to preserve order using bytewise

Problem
-------

Javascript Objects do not guarantee that the order of keys is preserved. However, this is important if you want to exploit order and use complex objects as keys in eg. leveldb. This module encodes an object as a tuple to solve this problem.

Usage
-----

```js

var tupleEncoding = require('tuple-encoding')

var enc = tupleEncoding(['foo', 'bar'])

enc.encode({foo: 'baz', bar: 'qux'}) // Buffer(' pbaz\u0000pqux\u0000\u0000')

enc.decode(new Buffer(' pbaz\u0000pqux\u0000\u0000', 'binary')) // {foo: 'baz', bar: 'qux'}
```

API
---

```jsig
tupleEncoding : (
  keys: Array<String>
) => {
  encode: Function(obj: Object) => Buffer,
  decode: Function(buf: Buffer) => Object
}
```

License
-------

[ISC](LICENSE)
