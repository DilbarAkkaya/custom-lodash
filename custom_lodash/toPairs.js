function toPairs(obj){
  let keyValueArr = [];
  let keysArr = [];
  for (let key in obj) {
    keysArr = [...keysArr, key];
  }  
   console.log(keysArr)
     for (let i = 0; i < keysArr.length; i++) {
     keyValueArr = [...keyValueArr, [keysArr[i], obj[keysArr[i]]]]
   }
  return keyValueArr;
}
//[['a', 1], ['b', 2]]
console.log(toPairs({ 'a': 1, 'c': 3 }))

export default toPairs;