
function fillValue(obj, key, createValue) {
  var value = obj[key];
  return value !== void 0 ? value :
    obj[key] = createValue();
}

module.exports = fillValue;
