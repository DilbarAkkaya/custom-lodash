function map(arr, iterate) {
  let mappedArr = [];
  for (let i = 0; i < arr.length; i++) {
      mappedArr = [...mappedArr, iterate(arr[i])]
  }
  return mappedArr;
}

export default map;