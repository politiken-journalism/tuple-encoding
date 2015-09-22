var DEFAULT_DELIMITER = '~'

module.exports = function (keys, delimiter) {
  if (delimiter == null) delimiter = DEFAULT_DELIMITER

  return {
    encode: function (obj) {
      return keys.map(function (k) {
        return obj[k]
      }).join(delimiter)
    },
    decode: function (str) {
      return str.split(delimiter).reduce(function (obj, val, p) {
        obj[keys[p]] = val

        return obj
      }, {})
    }
  }
}
