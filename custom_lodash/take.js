function take(arr, n) {
  let takedArr = [];
  for (let i = 0; i < n; i++) {
    takedArr = [...takedArr, arr[i]]
  }
  return takedArr;
}

export default take;