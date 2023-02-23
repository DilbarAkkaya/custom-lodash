function find(array, predicate, fromIndex = 0) {
  if (!predicate) return undefined
  for (let i = 0; i < array.length; i += 1) {
    if (!Array.isArray(array[i])) {
      if (predicate(array[i])) {
        return array[i];
      }
    }
    for (let j = 0; j < array[i].length; j += 1) {
      if (predicate(array[i][j], j, array[i])) {
        return array[i][j];
      }
    }
  }
}
export default find;