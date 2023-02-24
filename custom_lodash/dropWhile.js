function dropWhile(arr, predicate) {
  let droppedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      continue
    }
    droppedArr = [...droppedArr, arr[i]];
  }
  return droppedArr;
}

export default dropWhile;