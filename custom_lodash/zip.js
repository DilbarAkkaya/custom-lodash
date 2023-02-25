function zip(...arr) {
  let zippedArr = [];
  let arrFirstElements = [];
  let arrSecondElements = [];
  for(let i = 0; i < arr.length; i++) {
    arrFirstElements = [...arrFirstElements, arr[i][0]];
    arrSecondElements = [...arrSecondElements,arr[i][1]];
  }
  return [...zippedArr, arrFirstElements, arrSecondElements];
}
export default zip;