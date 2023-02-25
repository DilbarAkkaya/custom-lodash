function omitBy(obj, predicate) {
  let omittedByObj = obj;
  for (let key in obj) {
    if (predicate(obj[key])) {
      omittedByObj[key] === obj[key]
      delete omittedByObj[key]
    }
  }
  return omittedByObj
}

export default omitBy;