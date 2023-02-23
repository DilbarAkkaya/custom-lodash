function chunk(arr, n) {
  let arrChunks = []
  let tempArr = []
  for (let i = 0; i < arr.length; i++) {
    tempArr = [...tempArr, (arr[i])]
    if (i % n === n - 1) {
      arrChunks = [...arrChunks, tempArr]
      tempArr = []
    }
  }
  if (arr.length === 0 || n === 0) return undefined;
  if (tempArr.length > 0) {
    return arrChunks = [...arrChunks, tempArr]
  }
  return arrChunks
}
export default chunk;