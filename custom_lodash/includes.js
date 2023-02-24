function includes(arr, value, fromIndex=0){
  if (Array.isArray(arr)) {
    for (let i = fromIndex; i < arr.length; i++) {
      if (arr[i] === value) return true;
    }
  }
 
  if (typeof arr === 'object' && arr !== null) {
    let values = Object.values(arr);
    for (let i = 0; i < values.length; i++) {
      if (values[i] === value) return true;
    }
  }

  return false;
}

export default includes;