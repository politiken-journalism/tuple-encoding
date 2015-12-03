var bytewise = require('bytewise')

module.exports = function (keys) {
  return {
    encode: function (obj) {
      var tupleArr = keys.map(function (k) {
        return obj[k]
      })
      return bytewise.encode(tupleArr)
    },
    decode: function (buf) {
      return bytewise.decode(buf).reduce(function (obj, val, p) {
        obj[keys[p]] = val

        return obj
      }, {})
    }
  }
}
