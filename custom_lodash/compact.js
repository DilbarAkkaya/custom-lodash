function compact(arr) {
  let truthArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) === true) {
      truthArr = [...truthArr, arr[i]]
    }
  }
  return truthArr
}

export default compact;