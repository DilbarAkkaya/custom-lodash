function drop(arr, n = 1) {
  let dropArr = [];
  if (n < arr.length) {
    for (let i = n; i < arr.length; i++) {
      dropArr = [...dropArr, arr[i]]
    }
  }
  if (n === 0) {
    return arr
  }
  if (n > arr.length || !arr || arr === Boolean || typeof arr === 'string' || typeof arr === 'number') {
    return []
  }
  return dropArr
}

export default drop;