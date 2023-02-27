function pickBy(obj, predicate) {
  let pickedByObj = {};
  for (let key in obj) {
    if (predicate(obj[key])) {
      pickedByObj = { ...pickedByObj, [key]: obj[key] }
    }
  }
  return pickedByObj
}

export default pickBy;